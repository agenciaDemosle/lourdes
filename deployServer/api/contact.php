<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método no permitido']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true);

if (!$input || !isset($input['nombre']) || !isset($input['email']) || !isset($input['telefono']) || !isset($input['servicio']) || !isset($input['mensaje'])) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Datos incompletos']);
    exit;
}

$nombre = filter_var($input['nombre'], FILTER_SANITIZE_STRING);
$email = filter_var($input['email'], FILTER_VALIDATE_EMAIL);
$telefono = filter_var($input['telefono'], FILTER_SANITIZE_STRING);
$servicio = filter_var($input['servicio'], FILTER_SANITIZE_STRING);
$mensaje = filter_var($input['mensaje'], FILTER_SANITIZE_STRING);

if (!$email) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Email inválido']);
    exit;
}

// Configuración de email para SiteGround
$to = 'contacto@fumigacioneslourdes.cl';
$subject = 'Nueva consulta desde web - ' . ucfirst($servicio);

// Crear el cuerpo del mensaje
$body = "
<!DOCTYPE html>
<html>
<head>
    <meta charset='UTF-8'>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
        .content { background-color: #f9f9f9; padding: 30px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #dc2626; }
        .value { margin-top: 5px; }
        .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
    </style>
</head>
<body>
    <div class='container'>
        <div class='header'>
            <h1>Nueva Consulta - Fumigaciones Lourdes</h1>
        </div>
        <div class='content'>
            <div class='field'>
                <div class='label'>Nombre:</div>
                <div class='value'>{$nombre}</div>
            </div>
            <div class='field'>
                <div class='label'>Email:</div>
                <div class='value'>{$email}</div>
            </div>
            <div class='field'>
                <div class='label'>Teléfono:</div>
                <div class='value'>{$telefono}</div>
            </div>
            <div class='field'>
                <div class='label'>Servicio solicitado:</div>
                <div class='value'>" . ucfirst(str_replace('-', ' ', $servicio)) . "</div>
            </div>
            <div class='field'>
                <div class='label'>Mensaje:</div>
                <div class='value'>{$mensaje}</div>
            </div>
        </div>
        <div class='footer'>
            <p>Este mensaje fue enviado desde el formulario de contacto de fumigacioneslourdes.cl</p>
            <p>Fecha: " . date('d/m/Y H:i:s') . "</p>
        </div>
    </div>
</body>
</html>
";

// Headers del email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: noreply@fumigacioneslourdes.cl" . "\r\n";
$headers .= "Reply-To: {$email}" . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

// Intentar enviar el email
$mailSent = mail($to, $subject, $body, $headers);

if ($mailSent) {
    // Email de confirmación al cliente
    $clientSubject = "Confirmación de consulta - Fumigaciones Lourdes";
    $clientBody = "
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset='UTF-8'>
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #dc2626; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 30px; }
            .footer { background-color: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class='container'>
            <div class='header'>
                <h1>¡Gracias por contactarnos!</h1>
            </div>
            <div class='content'>
                <p>Estimado/a {$nombre},</p>
                <p>Hemos recibido su consulta sobre nuestros servicios de <strong>" . ucfirst(str_replace('-', ' ', $servicio)) . "</strong>.</p>
                <p>Nuestro equipo revisará su solicitud y se pondrá en contacto con usted a la brevedad posible.</p>
                <p>Datos de su consulta:</p>
                <ul>
                    <li><strong>Servicio:</strong> " . ucfirst(str_replace('-', ' ', $servicio)) . "</li>
                    <li><strong>Teléfono:</strong> {$telefono}</li>
                    <li><strong>Fecha:</strong> " . date('d/m/Y H:i:s') . "</li>
                </ul>
                <p>Si tiene alguna urgencia, puede contactarnos directamente al <strong>+56 9 1234 5678</strong>.</p>
                <p>Saludos cordiales,<br>Equipo Fumigaciones Lourdes</p>
            </div>
            <div class='footer'>
                <p>Fumigaciones Lourdes - Región Metropolitana</p>
                <p>Teléfono: +56 9 1234 5678 | Email: contacto@fumigacioneslourdes.cl</p>
            </div>
        </div>
    </body>
    </html>
    ";

    $clientHeaders = "MIME-Version: 1.0" . "\r\n";
    $clientHeaders .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $clientHeaders .= "From: contacto@fumigacioneslourdes.cl" . "\r\n";
    $clientHeaders .= "Reply-To: contacto@fumigacioneslourdes.cl" . "\r\n";

    mail($email, $clientSubject, $clientBody, $clientHeaders);

    echo json_encode(['success' => true, 'message' => 'Mensaje enviado correctamente. Recibirá una confirmación por email.']);
} else {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Error al enviar el mensaje. Por favor intente nuevamente.']);
}
?>