const emailHtml = async ({ order, orderedProductsSpan, username, orderedProducts, mainImg, title }) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
            body,
            table,
            td,
            a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
    
            table,
            td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }
    
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
            }
    
            table {
                border-collapse: collapse !important;
            }
    
            body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
            }
    
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            @media screen and (max-width: 480px) {
                .mobile-hide {
                    display: none !important;
                }
    
                .mobile-center {
                    text-align: center !important;
                }
            }
    
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
        </style>
    
    <body style="margin: 0 !important; padding: 0 !important; background-color: white;" bgcolor="white">
    
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td align="center" style="background-color: white;" bgcolor="white">
    
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                        <tr>
                            <td align="center" valign="top" style="font-size:0; padding: 35px;">
    
                                <div
                                    style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:300px;">
                                        <tr>
                                            <td align="left" valign="top"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                class="mobile-center">
                                                <a style="display: flex; align-items: center; justify-content: center;"
                                                    href="https://www.gropto.com/">
                                                    <img src="https://www.gropto.com/assets/groptoLogo-transparent.png"
                                                        alt="Gropto logo" height="60" width="200">
                                                </a>
    
                                            </td>
                                        </tr>
                                    </table>
                                </div>
    
                                <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;"
                                    class="mobile-hide">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:300px;">
                                        <tr>
                                            <td align="right" valign="top"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                    <tr>
                                                        <td
                                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                                            <p style="font-size: 18px; font-weight: 400; margin: 0;">
                                                                <a href="https://www.gropto.com/account/order/${order._id}"
                                                                    style="color: #F97316; text-decoration: none; font-size: small; font-weight: 600;">View
                                                                    Order
                                                                    &nbsp;</a>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
    
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding: 0px 35px 20px 35px; background-color: #ffffff;"
                                bgcolor="#ffffff">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                    style="max-width:600px;">
                                   
                                    <tr style="margin-top: 16px;">
                                        <td align="left"
                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                            <p>Dear <strong>${username}</strong>,</p>
    
                                            <p>Thank you for choosing Gropto! We've successfully received your order.</p>
    
                                            <p><strong>Order Details:</strong></p>
                                            <ul>
                                                <li>Order ID: <strong>${order.orderId}</strong></li>
                                                <li>Order placed on: <strong>${order.createdAt}</strong></li>
                                                <li>Items<strong>(${orderedProducts.length})</strong>: <span id="orderedProducts">${orderedProductsSpan}</span></li>
                                                <li>Total Amount: <strong>Rs. ${order.totalPrice}</strong></li>
                                            </ul>
    
    
                                            <p>Your order is now being processed, and you'll receive a shipment notification
                                                soon.</p>
                                                <div style="display: flex; align-items: center; justify-content: space-between;">
                                                <div>
                                                    <p>Best regards,<br><strong>Gropto Technologies</strong></p>
                                                </div>
                                                <div style="display: flex; gap: 10px;"> 
                                                    <a target='_'
                                                        href="https://www.gropto.com">
                                                        <img style="height: 1.55rem;" src="https://www.gropto.com/Appstore.webp" alt="iphone" /></a>
    
    
                                                    <a target='_'
                                                        href="https://play.google.com/store/apps/details?id=gropto.com">
                                                        <img style="height: 1.55rem;" src="https://www.gropto.com/playstore.webp" alt="android" /></a>
    
                                                </div>
    
                                            </div>
                                            
                                            </td>
                                    </tr>

                                    
                                <tr>
                                <td>
                                    <div
                                        style="margin: 20px; display: flex; align-items: center; justify-content: space-around;">
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/terms-of-services">Terms</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/privacy-policy">Privacy</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/support">Contact us</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/about">About</a>
                                    </div>

                                </td>
                            </tr>
    
                                </table>
    
                            </td>
                        </tr>
    
                    </table>
                </td>
            </tr>
        </table>

    
    </body>
    
    </html>
    `
}

const emailHtmlOutForDelivery = ({ order, username, deliveryVerificationCode }) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <style type="text/css">
            body,
            table,
            td,
            a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
    
            table,
            td {
                mso-table-lspace: 0pt;
                mso-table-rspace: 0pt;
            }
    
            img {
                -ms-interpolation-mode: bicubic;
            }
    
            img {
                border: 0;
                height: auto;
                line-height: 100%;
                outline: none;
                text-decoration: none;
            }
    
            table {
                border-collapse: collapse !important;
            }
    
            body {
                height: 100% !important;
                margin: 0 !important;
                padding: 0 !important;
                width: 100% !important;
            }
    
    
            a[x-apple-data-detectors] {
                color: inherit !important;
                text-decoration: none !important;
                font-size: inherit !important;
                font-family: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
            }
    
            @media screen and (max-width: 480px) {
                .mobile-hide {
                    display: none !important;
                }
    
                .mobile-center {
                    text-align: center !important;
                }
            }
    
            div[style*="margin: 16px 0;"] {
                margin: 0 !important;
            }
        </style>
    
    <body style="margin: 0 !important; padding: 0 !important; background-color: white;" bgcolor="white">
    
        <table border="0" cellpadding="0" cellspacing="0" width="100%">
            <tr>
                <td align="center" style="background-color: white;" bgcolor="white">
    
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                        <tr>
                            <td align="center" valign="top" style="font-size:0; padding: 35px;">
    
                                <div
                                    style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:300px;">
                                        <tr>
                                            <td align="left" valign="top"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                class="mobile-center">
                                                <a style="display: flex; align-items: center; justify-content: center;"
                                                    href="https://www.gropto.com/"><img
                                                        src="https://www.gropto.com/assets/groptoLogo-transparent.png"
                                                        alt="Gropto logo" height="60" width="200"></a>
    
                                            </td>
                                        </tr>
                                    </table>
                                </div>
    
                                <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;"
                                    class="mobile-hide">
                                    <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:300px;">
                                        <tr>
                                            <td align="right" valign="top"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                    <tr>
                                                        <td
                                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                                            <p style="font-size: 18px; font-weight: 400; margin: 0;">
                                                                <a href="https://www.gropto.com/account/order/${order._id}"
                                                                    style="color: #F97316; text-decoration: none; font-size: small; font-weight: 600;">View
                                                                    Order
                                                                    &nbsp;</a>
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </table>
                                            </td>
                                        </tr>
                                    </table>
                                </div>
    
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding: 0px 35px 20px 35px; background-color: #ffffff;"
                                bgcolor="#ffffff">
                                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                    style="max-width:600px;">

                                    <tr style="margin-top: 16px;">
                                        <td align="left"
                                            style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                            <p>Dear <strong>${username}</strong>,</p>
    
                                           
                                      <p>Thank you for choosing Gropto! Your order is now in transit and on its way to you. Your delivery verification code is <strong>${deliveryVerificationCode}</strong>.</p>
    
                                            <p><strong>Order Details:</strong></p>
                                            <ul>
                                                <li>Order ID: <strong>${order.orderId}</strong></li>
                                                <li>Order placed on: <strong>${order.createdAt}</strong></li>
                                            </ul>
    
    
                                            <p>Your order is out for delivery, and you'll receive a delivery notification
                                                soon.</p>
    
    
                                            
                                        <div style="display: flex; align-items: center; justify-content: space-between;">
                                            <div>
                                                <p>Best regards,<br><strong>Gropto Technologies</strong></p>
                                            </div>
                                            <div style="display: flex; gap: 10px;"> 
                                                <a target='_'
                                                    href="https://www.gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/Appstore.webp" alt="iphone" /></a>


                                                <a target='_'
                                                    href="https://play.google.com/store/apps/details?id=gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/playstore.webp" alt="android" /></a>

                                            </div>

                                        </div>
    
                                        </td>
                                    </tr>
    

                                    <tr>
                                    <td>
                                        <div
                                            style="margin: 20px; display: flex; align-items: center; justify-content: space-around;">
                                            <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                                href="https://www.gropto.com/terms-of-services">Terms</a>
                                            <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                                href="https://www.gropto.com/privacy-policy">Privacy</a>
                                            <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                                href="https://www.gropto.com/support">Contact us</a>
                                            <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                                href="https://www.gropto.com/about">About</a>
                                        </div>

                                    </td>
                                </tr>

                                </table>
    
                            </td>
                        </tr>
    
                    </table>
                </td>
            </tr>
        </table>
    
    </body>
    
    </html>`
}


const emailHtmlForReturnReqReject = async ({ order, username, returnReqRejectionReason }) => `<!DOCTYPE html>
        <html>
        
        <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <style type="text/css">
                body,
                table,
                td,
                a {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
        
                table,
                td {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                }
        
                table {
                    border-collapse: collapse !important;
                }
        
                body {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                }
        
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                @media screen and (max-width: 480px) {
                    .mobile-hide {
                        display: none !important;
                    }
        
                    .mobile-center {
                        text-align: center !important;
                    }
                }
        
                div[style*="margin: 16px 0;"] {
                    margin: 0 !important;
                }
            </style>
        
        <body style="margin: 0 !important; padding: 0 !important; background-color: white;" bgcolor="white">
        
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" style="background-color: white;" bgcolor="white">
        
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                            <tr>
                                <td align="center" valign="top" style="font-size:0; padding: 35px;">
        
                                    <div
                                        style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="left" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                    class="mobile-center">
                                                    <a style="display: flex; align-items: center; justify-content: center;"
                                                        href="https://www.gropto.com/"><img
                                                            src="https://www.gropto.com/assets/groptoLogo-transparent.png"
                                                            alt="Gropto logo" height="60" width="200"></a>
        
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                    <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;"
                                        class="mobile-hide">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="right" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                    <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                        <tr>
                                                            <td
                                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                                                <p style="font-size: 18px; font-weight: 400; margin: 0;">
                                                                    <a href="https://www.gropto.com/account/order/${order._id}"
                                                                        style="color: #F97316; text-decoration: none; font-size: small; font-weight: 600;">View
                                                                        Order
                                                                        &nbsp;</a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0px 35px 20px 35px; background-color: #ffffff;"
                                    bgcolor="#ffffff">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:600px;">
                                       
                                        <tr style="margin-top: 16px;">
                                            <td align="left"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                                <p>Dear <strong>${username}</strong>,</p>
        
                                                <p>We are sorry, your return request is rejected - ${returnReqRejectionReason}</p>
        
                                                <p><strong>Order Details:</strong></p>
                                                <ul>
                                                    <li>Order ID: <strong>${order.orderId}</strong></li>
                                                    <li>Date: <strong>${order.createdAt}</strong></li>
                                                </ul>
        
        
                                                <p>Thank you for choosing Gropto!</p>
        
        
                                                
                                        <div style="display: flex; align-items: center; justify-content: space-between;">
                                            <div>
                                                <p>Best regards,<br><strong>Gropto Technologies</strong></p>
                                            </div>
                                            <div style="display: flex; gap: 10px;"> 
                                                <a target='_'
                                                    href="https://www.gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/Appstore.webp" alt="iphone" /></a>


                                                <a target='_'
                                                    href="https://play.google.com/store/apps/details?id=gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/playstore.webp" alt="android" /></a>

                                            </div>

                                        </div>
        
                                            </td>
                                        </tr>

                                        
                                <tr>
                                <td>
                                    <div
                                        style="margin: 20px; display: flex; align-items: center; justify-content: space-around;">
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/terms-of-services">Terms</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/privacy-policy">Privacy</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/support">Contact us</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/about">About</a>
                                    </div>

                                </td>
                            </tr>
        
                                    </table>
        
                                </td>
                            </tr>
        
                        </table>
                    </td>
                </tr>
            </table>
        
        
        </body>
        
        </html>`


const emailHtmlOrderPickup = async ({ order, username }) => {
    `<!DOCTYPE html>
        <html>
        
        <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <style type="text/css">
                body,
                table,
                td,
                a {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
        
                table,
                td {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                }
        
                table {
                    border-collapse: collapse !important;
                }
        
                body {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                }
        
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                @media screen and (max-width: 480px) {
                    .mobile-hide {
                        display: none !important;
                    }
        
                    .mobile-center {
                        text-align: center !important;
                    }
                }
        
                div[style*="margin: 16px 0;"] {
                    margin: 0 !important;
                }
            </style>
        
        <body style="margin: 0 !important; padding: 0 !important; background-color: white;" bgcolor="white">
        
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" style="background-color: white;" bgcolor="white">
        
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                            <tr>
                                <td align="center" valign="top" style="font-size:0; padding: 35px;">
        
                                    <div
                                        style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="left" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                    class="mobile-center">
                                                    <a style="display: flex; align-items: center; justify-content: center;"
                                                        href="https://www.gropto.com/"><img
                                                            src="https://www.gropto.com/assets/groptoLogo-transparent.png"
                                                            alt="Gropto logo" height="60" width="200"></a>
        
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                    <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;"
                                        class="mobile-hide">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="right" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                    <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                        <tr>
                                                            <td
                                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                                                <p style="font-size: 18px; font-weight: 400; margin: 0;">
                                                                    <a href="https://www.gropto.com/account/order/${order._id}"
                                                                        style="color: #F97316; text-decoration: none; font-size: small; font-weight: 600;">View
                                                                        Order
                                                                        &nbsp;</a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0px 35px 20px 35px; background-color: #ffffff;"
                                    bgcolor="#ffffff">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:600px;">
                                      
                                        <tr style="margin-top: 16px;">
                                            <td align="left"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                                <p>Dear <strong>${username}</strong>,</p>
        
                                                <p>On behalf of your replacement request we have to Pick Up order. keep items ready for give it back. </p>
        
                                                <p><strong>Order Details:</strong></p>
                                                <ul>
                                                    <li>Order ID: <strong>${order.orderId}</strong></li>
                                                    <li>Date: <strong>${order.createdAt}</strong></li>
                                                </ul>
        
        
                                                <p>Thank you for choosing Gropto!</p>
        
        
                                                
                                        <div style="display: flex; align-items: center; justify-content: space-between;">
                                            <div>
                                                <p>Best regards,<br><strong>Gropto Technologies</strong></p>
                                            </div>
                                            <div style="display: flex; gap: 10px;"> 
                                                <a target='_'
                                                    href="https://www.gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/Appstore.webp" alt="iphone" /></a>


                                                <a target='_'
                                                    href="https://play.google.com/store/apps/details?id=gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/playstore.webp" alt="android" /></a>

                                            </div>

                                        </div>
        
                                            </td>
                                        </tr>

                                        
                                <tr>
                                <td>
                                    <div
                                        style="margin: 20px; display: flex; align-items: center; justify-content: space-around;">
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/terms-of-services">Terms</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/privacy-policy">Privacy</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/support">Contact us</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/about">About</a>
                                    </div>

                                </td>
                            </tr>
        
                                    </table>
        
                                </td>
                            </tr>
        
                        </table>
                    </td>
                </tr>
            </table>
        
        
        </body>
        
        </html>`}

const emailHtmlRefundAppr = async ({ order, username, refundAcknowledgementId }) => {
    `<!DOCTYPE html>
        <html>
        
        <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <style type="text/css">
                body,
                table,
                td,
                a {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
        
                table,
                td {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                }
        
                table {
                    border-collapse: collapse !important;
                }
        
                body {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                }
        
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                @media screen and (max-width: 480px) {
                    .mobile-hide {
                        display: none !important;
                    }
        
                    .mobile-center {
                        text-align: center !important;
                    }
                }
        
                div[style*="margin: 16px 0;"] {
                    margin: 0 !important;
                }
            </style>
        
        <body style="margin: 0 !important; padding: 0 !important; background-color: white;" bgcolor="white">
        
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" style="background-color: white;" bgcolor="white">
        
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                            <tr>
                                <td align="center" valign="top" style="font-size:0; padding: 35px;">
        
                                    <div
                                        style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="left" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                    class="mobile-center">
                                                    <a style="display: flex; align-items: center; justify-content: center;"
                                                        href="https://www.gropto.com/"><img
                                                            src="https://www.gropto.com/assets/groptoLogo-transparent.png"
                                                            alt="Gropto logo" height="60" width="200"></a>
        
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                    <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;"
                                        class="mobile-hide">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="right" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                    <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                        <tr>
                                                            <td
                                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                                                <p style="font-size: 18px; font-weight: 400; margin: 0;">
                                                                    <a href="https://www.gropto.com/account/order/${order._id}"
                                                                        style="color: #F97316; text-decoration: none; font-size: small; font-weight: 600;">View
                                                                        Order
                                                                        &nbsp;</a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0px 35px 20px 35px; background-color: #ffffff;"
                                    bgcolor="#ffffff">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:600px;">
                                       
                                        <tr style="margin-top: 16px;">
                                            <td align="left"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                                <p>Dear <strong>${username}</strong>,</p>
        
                                                <p>Your funds have been released for order ID <strong>${order.orderId}</strong>, in accordance with your return request. It reflected your side within 2 working days.</p>
        
                                                <p><strong>Order Details:</strong></p>
                                                <ul>
                                                    <li>Refund Acknowledgement ID: <strong>${refundAcknowledgementId}</strong></li>
                                                    <li>Date: <strong>${order.createdAt}</strong></li>
                                                </ul>

                                                <p>Thank you for choosing Gropto!</p>
        
                                                
                                        <div style="display: flex; align-items: center; justify-content: space-between;">
                                            <div>
                                                <p>Best regards,<br><strong>Gropto Technologies</strong></p>
                                            </div>
                                            <div style="display: flex; gap: 10px;"> 
                                                <a target='_'
                                                    href="https://www.gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/Appstore.webp" alt="iphone" /></a>


                                                <a target='_'
                                                    href="https://play.google.com/store/apps/details?id=gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/playstore.webp" alt="android" /></a>

                                            </div>

                                        </div>
        
                                            </td>
                                        </tr>
        
                                        
                                <tr>
                                <td>
                                    <div
                                        style="margin: 20px; display: flex; align-items: center; justify-content: space-around;">
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/terms-of-services">Terms</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/privacy-policy">Privacy</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/support">Contact us</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/about">About</a>
                                    </div>

                                </td>
                            </tr>

                                    </table>
        
                                </td>
                            </tr>
        
                        </table>
                    </td>
                </tr>
            </table>
        
        
        </body>
        
        </html>`}

const emailHtmlOrdCancelReturn = ({ order, username, OrdCancelReturnReason }) => {
    `<!DOCTYPE html>
        <html>
        
        <head>
            <title></title>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <style type="text/css">
                body,
                table,
                td,
                a {
                    -webkit-text-size-adjust: 100%;
                    -ms-text-size-adjust: 100%;
                }
        
                table,
                td {
                    mso-table-lspace: 0pt;
                    mso-table-rspace: 0pt;
                }
        
                img {
                    -ms-interpolation-mode: bicubic;
                }
        
                img {
                    border: 0;
                    height: auto;
                    line-height: 100%;
                    outline: none;
                    text-decoration: none;
                }
        
                table {
                    border-collapse: collapse !important;
                }
        
                body {
                    height: 100% !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    width: 100% !important;
                }
        
        
                a[x-apple-data-detectors] {
                    color: inherit !important;
                    text-decoration: none !important;
                    font-size: inherit !important;
                    font-family: inherit !important;
                    font-weight: inherit !important;
                    line-height: inherit !important;
                }
        
                @media screen and (max-width: 480px) {
                    .mobile-hide {
                        display: none !important;
                    }
        
                    .mobile-center {
                        text-align: center !important;
                    }
                }
        
                div[style*="margin: 16px 0;"] {
                    margin: 0 !important;
                }
            </style>
        
        <body style="margin: 0 !important; padding: 0 !important; background-color: white;" bgcolor="white">
        
            <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                    <td align="center" style="background-color: white;" bgcolor="white">
        
                        <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                            <tr>
                                <td align="center" valign="top" style="font-size:0; padding: 35px;">
        
                                    <div
                                        style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="left" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                    class="mobile-center">
                                                    <a style="display: flex; align-items: center; justify-content: center;"
                                                        href="https://www.gropto.com/"><img
                                                            src="https://www.gropto.com/assets/groptoLogo-transparent.png"
                                                            alt="Gropto logo" height="60" width="200"></a>
        
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                    <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;"
                                        class="mobile-hide">
                                        <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                            style="max-width:300px;">
                                            <tr>
                                                <td align="right" valign="top"
                                                    style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                    <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                        <tr>
                                                            <td
                                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                                                <p style="font-size: 18px; font-weight: 400; margin: 0;">
                                                                    <a href="https://www.gropto.com/account/order/${order._id}"
                                                                        style="color: #F97316; text-decoration: none; font-size: small; font-weight: 600;">View
                                                                        Order
                                                                        &nbsp;</a>
                                                                </p>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </div>
        
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="padding: 0px 35px 20px 35px; background-color: #ffffff;"
                                    bgcolor="#ffffff">
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                        style="max-width:600px;">
                                       
                                        <tr style="margin-top: 16px;">
                                            <td align="left"
                                                style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                                <p>Dear <strong>${username}</strong>,</p>
        
                                                <p>We are sorry, your order has been cancelled by Gropto admin ${OrdCancelReturnReason}</p>
        
                                                <p><strong>Order Details:</strong></p>
                                                <ul>
                                                    <li>Order ID: <strong>${order.orderId}</strong></li>
                                                    <li>Date: <strong>${order.createdAt}</strong></li>
                                                </ul>
        
        
                                                <p>Thank you for choosing Gropto!</p>
        
        
                                                
                                        <div style="display: flex; align-items: center; justify-content: space-between;">
                                            <div>
                                                <p>Best regards,<br><strong>Gropto Technologies</strong></p>
                                            </div>
                                            <div style="display: flex; gap: 10px;"> 
                                                <a target='_'
                                                    href="https://www.gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/Appstore.webp" alt="iphone" /></a>


                                                <a target='_'
                                                    href="https://play.google.com/store/apps/details?id=gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/playstore.webp" alt="android" /></a>

                                            </div>

                                        </div>
        
                                            </td>
                                        </tr>
        
                                        
                                <tr>
                                <td>
                                    <div
                                        style="margin: 20px; display: flex; align-items: center; justify-content: space-around;">
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/terms-of-services">Terms</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/privacy-policy">Privacy</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/support">Contact us</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/about">About</a>
                                    </div>

                                </td>
                            </tr>

                                    </table>
        
                                </td>
                            </tr>
        
                        </table>
                    </td>
                </tr>
            </table>
        
        
        </body>
        
        </html>
        `}

const emailHtmlDelivered = ({ order, username }) => {
    `<!DOCTYPE html>
      <html>
      
      <head>
          <title></title>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <style type="text/css">
              body,
              table,
              td,
              a {
                  -webkit-text-size-adjust: 100%;
                  -ms-text-size-adjust: 100%;
              }
      
              table,
              td {
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
              }
      
              img {
                  -ms-interpolation-mode: bicubic;
              }
      
              img {
                  border: 0;
                  height: auto;
                  line-height: 100%;
                  outline: none;
                  text-decoration: none;
              }
      
              table {
                  border-collapse: collapse !important;
              }
      
              body {
                  height: 100% !important;
                  margin: 0 !important;
                  padding: 0 !important;
                  width: 100% !important;
              }
      
      
              a[x-apple-data-detectors] {
                  color: inherit !important;
                  text-decoration: none !important;
                  font-size: inherit !important;
                  font-family: inherit !important;
                  font-weight: inherit !important;
                  line-height: inherit !important;
              }
      
              @media screen and (max-width: 480px) {
                  .mobile-hide {
                      display: none !important;
                  }
      
                  .mobile-center {
                      text-align: center !important;
                  }
              }
      
              div[style*="margin: 16px 0;"] {
                  margin: 0 !important;
              }
          </style>
      
      <body style="margin: 0 !important; padding: 0 !important; background-color: white;" bgcolor="white">
      
          <table border="0" cellpadding="0" cellspacing="0" width="100%">
              <tr>
                  <td align="center" style="background-color: white;" bgcolor="white">
      
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                          <tr>
                              <td align="center" valign="top" style="font-size:0; padding: 35px;">
      
                                  <div
                                      style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                          style="max-width:300px;">
                                          <tr>
                                              <td align="left" valign="top"
                                                  style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 48px;"
                                                  class="mobile-center">
                                                  <a style="display: flex; align-items: center; justify-content: center;"
                                                      href="https://www.gropto.com/"><img
                                                          src="https://www.gropto.com/assets/groptoLogo-transparent.png"
                                                          alt="Gropto logo" height="60" width="200"></a>
      
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
      
                                  <div style="display:inline-block; max-width:50%; min-width:100px; vertical-align:top; width:100%;"
                                      class="mobile-hide">
                                      <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%"
                                          style="max-width:300px;">
                                          <tr>
                                              <td align="right" valign="top"
                                                  style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; line-height: 48px;">
                                                  <table cellspacing="0" cellpadding="0" border="0" align="right">
                                                      <tr>
                                                          <td
                                                              style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400;">
                                                              <p style="font-size: 18px; font-weight: 400; margin: 0;">
                                                                  <a href="https://www.gropto.com/account/order/${order?._id}"
                                                                      style="color: #F97316; text-decoration: none; font-size: small; font-weight: 600;">View
                                                                      Order
                                                                      &nbsp;</a>
                                                              </p>
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </td>
                                          </tr>
                                      </table>
                                  </div>
      
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="padding: 0px 35px 20px 35px; background-color: #ffffff;"
                                  bgcolor="#ffffff">
                                  <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%"
                                      style="max-width:600px;">
                           
                                      <tr style="margin-top: 16px;">
                                          <td align="left"
                                              style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 10px;">
                                              <p>Dear <strong>${username}</strong>,</p>
      
                                              <p>Your order from Gropto has been successfully
                                                  delivered to your specified address. We hope you enjoy your purchase.</p>
      
                                              <p><strong>Order Details:</strong></p>
                                              <ul>
                                                  <li>Order ID: <strong>${order?.orderId}</strong></li>
                                                  <li>Date: <strong>${order?.createdAt}</strong></li>
                                              </ul>
      
      
                                              <p>Thank you for choosing Gropto!</p>
      
      
                                              
                                        <div style="display: flex; align-items: center; justify-content: space-between;">
                                            <div>
                                                <p>Best regards,<br><strong>Gropto Technologies</strong></p>
                                            </div>
                                            <div style="display: flex; gap: 10px;"> 
                                                <a target='_'
                                                    href="https://www.gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/Appstore.webp" alt="iphone" /></a>


                                                <a target='_'
                                                    href="https://play.google.com/store/apps/details?id=gropto.com">
                                                    <img style="height: 1.55rem;" src="https://www.gropto.com/playstore.webp" alt="android" /></a>

                                            </div>

                                        </div>
      
                                          </td>
                                      </tr>
      
                                      
                                <tr>
                                <td>
                                    <div
                                        style="margin: 20px; display: flex; align-items: center; justify-content: space-around;">
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/terms-of-services">Terms</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/privacy-policy">Privacy</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/support">Contact us</a>
                                        <a style="text-decoration: none; color: rgb(94, 94, 94); " target='_'
                                            href="https://www.gropto.com/about">About</a>
                                    </div>

                                </td>
                            </tr>

                                  </table>
      
                              </td>
                          </tr>
      
                      </table>
                  </td>
              </tr>
          </table>
      
      
      </body>
      
      </html>
      `
}

module.exports = { emailHtml, emailHtmlOutForDelivery, emailHtmlForReturnReqReject, emailHtmlOrderPickup, emailHtmlRefundAppr, emailHtmlOrdCancelReturn, emailHtmlDelivered };