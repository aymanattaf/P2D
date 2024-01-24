# PDF to DOCX Conversion with OCR

This Python script converts PDF files to DOCX files using OCR (Optical Character Recognition) for text extraction.

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Usage](#usage)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Overview

The script utilizes the `pdf2image` library to convert PDF pages to images, `pytesseract` for OCR, and the `docx` library for creating Word documents. It iterates through PDF files in a specified directory, performs OCR on each page, and generates a corresponding DOCX file.

## Requirements

- Python 3
- Install required Python packages:
  ```bash
  pip install pdf2image docx pytesseract
  ```
  - Ensure Tesseract OCR is installed and in your system's PATH.

## Usage

1. Place your PDF files in the `raw data` directory.
2. Run the script:
   ```bash
   python pdf_to_docx_with_ocr.py
   ```
3. Converted DOCX files will be saved in the `output` directory.

## Configuration

- Customize the input (`raw data`) and output (`output`) directories in the script.

## Dependencies

- [pdf2image](https://github.com/Belval/pdf2image): Converts PDF pages to images.
- [pytesseract](https://github.com/madmaze/pytesseract): Python wrapper for Tesseract OCR engine.
- [docx](https://python-docx.readthedocs.io/): Python library for creating Word documents.

## Contributing

Feel free to contribute by opening issues or submitting pull requests. Your feedback and contributions are welcome!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```

Copy this content into a `README.md` file in your project's root directory. Make sure to create a `LICENSE` file as well if you haven't already, and choose the appropriate license for your project.

Replace placeholders like "pdf_to_docx_with_ocr.py" with the actual name of your Python script. Add any additional information or customization based on your project's specific details.

Once done, commit and push your changes to GitHub. This README file will serve as a guide for users to understand, use, and contribute to your project.
