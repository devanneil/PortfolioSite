import segno

qrcode = segno.make_qr("https://devanneil.github.io/")
qrcode.save(
    "borderless_qrcode.png",
    scale=5,
    border=0,
)