import os
from pdf2image import convert_from_path
from docx import Document
from docx.shared import Inches
import pytesseract

# Directory containing the PDF files
pdf_directory = 'raw data'

# Output directory for DOCX files
output_dir = 'output'

# Create the output directory if it doesn't exist
os.makedirs(output_dir, exist_ok=True)

# Function to convert a single PDF to DOCX with OCR
def convert_pdf_to_docx(pdf_file_path, output_dir):
    # Construct the output DOCX file path
    docx_file = os.path.join(output_dir, os.path.basename(pdf_file_path).replace('.pdf', '.docx'))

    # Convert PDF to a list of images
    images = convert_from_path(pdf_file_path)

    # Create a new DOCX file
    doc = Document()

    # Add each image as a new page in the DOCX file
    for image in images:
        image_path = 'temp_image.png'
        image.save(image_path)

        # Perform OCR on the image
        extracted_text = pytesseract.image_to_string(image_path, lang='eng')

        # Add the extracted text to the DOCX file
        doc.add_paragraph(extracted_text)

        os.remove(image_path)

    # Save the DOCX file
    doc.save(docx_file)

    print(f"Converted {pdf_file_path} to {docx_file}")

# Iterate through the PDF files in the directory
for pdf_file in os.listdir(pdf_directory):
    if pdf_file.endswith('.pdf'):
        # Construct the full path to the PDF file
        pdf_file_path = os.path.join(pdf_directory, pdf_file)

        # Convert the current PDF file to DOCX using the function
        convert_pdf_to_docx(pdf_file_path, output_dir)
