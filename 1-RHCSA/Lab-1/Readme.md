# Lab 1: Shell Scripting Basics
Install MySQL database.

Create new directory to store the backup.

Create a shell script that takes backup from MySQL database (mysql dump), and store backup in the backup directory with name MySQL_backup_date.sql

Set a cron job using crontab to execute the script every day at 5:00 PM.

# Create a new directory for the backup and install MySQL if not already installed
```bash
mkdir -p /home/backup
sudo apt-get update
sudo apt-get install -y mysql-server
```
# Create a shell script to backup MySQL database
```bash
#!/bin/bash

cd /home/backup
mysqldump -u root --all-databases > MySQL_backup_$(date +%F).sql
```
# Make the script executable
```bash
chmod +x /home/backup/backup_mysql.sh
```
# Set a cron job to execute the script every day at 5:00 PM
```bash
(crontab -l 2>/dev/null; echo "0 17 * * * /home/backup/backup_mysql.sh") | crontab -
```

The output will be similar to the following image:
![Cron Job Output](../images/lab1.png)