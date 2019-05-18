# HRApplication
Application to manage employee absences


HRApplication is ASP.Net Core application with Angular frontend. Data are storage in SQLite database and supported by Entity Framework.
To display data are used ag-Grid,Angular Material and Bootstrap libraries. 

Main function of app is manage absences of employees. 
You can display absences which are actual (which are ongoing and which will be in the future) and absences in past. 
You could add a new one and delete existing. In app you also could display a list of workers. 

Updates:
ver 1.1
Add limit of absences. Every employee has 20 days of holiday limit for year. Absence which time span is over limit cannot be added. Absences marked as "L4" are not included in limit, just like the weekend.    
