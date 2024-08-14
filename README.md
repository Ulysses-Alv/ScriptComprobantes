# Renamer Script for AFIP Files

This project consists of an automated script to rename files downloaded from AFIP, specifically payroll/payment receipts and VEP documents.

## Requirements

### Files to Rename
The script will handle renaming two types of files:

1. **VEP**: Payment receipts that need to be renamed following the format `aportes-MM-YYYY.pdf`. Example: A file with a period `202304` will be renamed to `aportes-04-2023.pdf`.

2. **Payroll/Payment Receipt**: Salary receipt documents that will be renamed using the format `sueldo-MM-YYYY.pdf`. Example: A file with "February" in the title will be renamed to `sueldo-02-YYYY.pdf`.

### Consolidated File
The second requirement is to create a consolidated file from all the receipts, linking payroll receipts with their corresponding VEP documents. The consolidated file should be ordered by period.

## Usage Instructions

### Prerequisites
- Node.js installed on your machine.
- Create a `.env` file in the root of the project with the necessary variables to configure the environment.

### File Preparation
1. Place the VEP files and payroll receipts in a folder named `filesToRename` within the root of the project.

### Running the Script
1. To rename the files, open the terminal and run the following command:
   ```bash
   npm run renameFiles

