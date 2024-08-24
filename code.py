import qrcode

# Data to be encoded
data = "https://romain-cesbron.github.io/Portfolio-Website/"

# Create a QR Code object
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_L,
    box_size=10,
    border=4,
)

# Add data
qr.add_data(data)
qr.make(fit=True)

# Create an image from the QR Code instance
img = qr.make_image(fill='black', back_color='white')

# Save the image file
img.save("permanent_qrcode.png")
