from flask import Flask, jsonify
import cv2
from PIL import Image
import pytesseract

app = Flask(__name__)

# Your function to capture the image
def capture_image():
    cap = cv2.VideoCapture(0)
    if not cap.isOpened():
        return "Could not open webcam"
    ret, frame = cap.read()
    if not ret:
        return "Failed to capture image"
    cap.release()
    cv2.destroyAllWindows()

    image_path = 'captured_image.jpg'
    cv2.imwrite(image_path, frame)
    return image_path

# Your function to extract text from the image
def extract_text_from_image(image_path):
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image)
    return text

@app.route('/scan', methods=['GET'])
def scan():
    image_path = capture_image()
    if image_path:
        text = extract_text_from_image(image_path)
        return jsonify({"status": "success", "text": text})
    return jsonify({"status": "error", "message": "Failed to capture image"})

if __name__ == "__main__":
    app.run(debug=True)
