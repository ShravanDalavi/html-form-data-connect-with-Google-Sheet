# Html form data connect with Google Sheet

A Pen created on CodePen.io. Original URL: [https://codepen.io/Shravan-Dalavi/pen/oNRoXgR](https://codepen.io/Shravan-Dalavi/pen/oNRoXgR).

# Introduction
Integrating HTML forms with Google Sheets allows you to collect and store user-submitted data efficiently. In this report, we’ll explore how to achieve this integration using plain HTML, JavaScript, and Google Apps Script.

# System Architecture
The system consists of the following components:
1.	HTML Form: The user interface for data input.
2.	CSS Styling: Enhances the visual appearance of the form.
3.	JavaScript: Handles form submission and data transfer to Google Sheets.
4.	Google Apps Script: Receives data from the form and stores it in a Google Sheet.
   
# Components Overview
•	HTML Form: Captures user data.
•	CSS: Ensures the form is user-friendly and visually appealing.
•	JavaScript: Manages form submission, validation, and asynchronous data transfer.
•	Google Apps Script: Acts as a web service endpoint to process and store form data in Google Sheets.

# Features
•	User-Friendly Interface: Simple and clean form design.
•	Real-Time Data Submission: Immediate data transfer to Google Sheets upon form submission.
•	Form Validation: Ensures all required fields are filled correctly before submission.
•	Confirmation Messages: Provides feedback to users upon successful submission.

# Implementation Diagrams
1.	Set Up Google Sheet: Create or select an existing Google Sheet where the form data will be stored.
2.	Create Google Apps Script: In the Google Sheet, go to Extensions > Apps Script. Rename the default function and replace it with the provided script (see references for details).
3.	Run Initial Setup: Execute the initialSetup function to grant necessary permissions.
4.	Add a Trigger: Set up a trigger for the script (e.g., on form submission).
5.	Configure HTML Form: In your HTML form, set the action attribute to the Google Apps Script URL.
By following these steps, you can seamlessly connect an HTML front-end with backend storage provided by Google Sheets.

# System Architecture Diagram 
![image](https://github.com/ShravanDalavi/html-form-data-connect-with-Google-Sheet/assets/172488772/22e2213b-b493-4410-a728-d060250f9c54)

# Data Flow Diagram 
![image](https://github.com/ShravanDalavi/html-form-data-connect-with-Google-Sheet/assets/172488772/fb3528da-18e3-4334-98f6-26e55ba39c23)

 
# Integration with Google Sheets
Google Apps Script
The Google Apps Script acts as a backend for the form, receiving data and inserting it into the specified Google Sheet. The script URL and the form submission handler are configured to work seamlessly together.
HTML and JavaScript Integration
The form is designed using HTML, and the data is sent to the Google Apps Script using JavaScript's fetch API.

# Conclusion
Connecting HTML form data with Google Sheets simplifies data collection and management. Remember to handle user data securely and comply with privacy regulations.

# References
1 Google Apps Script Documentation
2 Fetch API Documentation
3 Google Sheets API Documentation
4 Google Spreadsheets as a Database – INSERT with Apps Script form POST/GET submit method 

