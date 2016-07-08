---
  layout: post
  title: Prepare LAMP Environment
  tags: linux apache mysql php
  categories: software
---

[LAMP](https://en.wikipedia.org/wiki/LAMP_(software_bundle)) is a model of web service solution stacks, including four oopen source components: [Linux](https://www.linux.com/), [Apache](http://www.apache.org/), [MySQL](https://www.mysql.com/), and [PHP](http://php.net/).
<!--excerpt-->

Linux installation is not included since different distributions are almost the same in regard to the installation process. This article provides both ways to deploy the stack for Debian-based and Red Hat-based distributions.

## Installation

### Install apache

**on Debian**

```
# apt-get install apache2
# systemctl enable apache2.service
# systemctl start apache2.service
```

**on CentOS**

```
# yum install httpd
# systemctl enable httpd.service
# systemctl start httpd.service
```

On CentOS, by default the corresponding port 80 (http) and 443 (https) are closed, you should open them in firewall.

```
# firewall-cmd --permanent --zone=public --add-service=http
# firewall-cmd --permanent --zone=public --add-service=https
# firewall-cmd --reload
```

To test Apache, open `http://your_ip_address` in the browser.

### Install mysql

**on Debian**

```
# apt-get install mysql-server
# systemctl enable mysql.service
# systemctl start mysql.service
```

**on CentOS**

```
# yum install mariadb-server mariadb
# systemctl enable mariadb.service
# systemctl start mariadb.service
```

Config Security Settings

```
# mysql_secure_installation
```

### Install PHP

**on Debian**

```
# apt-get install php5
# systemctl restart apache2.service
```

**on CentOS**

```
# yum install php
# systemctl restart httpd.service
```

To test PHP, first create a .php file.

```
# vim /var/www/html/info.php
```

Then paste code as follows as save.

```
<?php
phpinfo();
?>
```

Now open `http://your_ip_address/info.php` in the browser to check php info.

### Install MySQL Support in PHP

**on Debian**

```
# apt-get install php5-mysql
# systemctl restart apache2.service
```

**on CentOS**

```
# yum install php-mysql
# systemctl restart httpd.service
```

### Create WordPress Database

Login to MySQL

```
# mysql -u root -p
```

Create Database

```
CREATE DATABASE database_name;
```

Create User

```
CREATE USER user_name@localhost IDENTIFIED BY 'password';
```

Grant privileges to new user

```
GRANT ALL PRIVILEGES ON database_name.* TO user_name@localhost;
```

Frefresh privileges

```
FLUSH PRIVILEGES;
```

Logout

```
exit
```

Restart services

**on Debian**

```
# systemctl restart apache2.service
# systemctl restart mysql.service
```

**on CentOS**

```
# systemctl restart httpd.service
# systemctl restart mariadb.service
```

### Install WordPress

Download WordPress

```
# wget http://wordpress.org/latest.zip
```

Unzip to `/var/www/html/`

```
# unzip -q latest.zip -d /var/www/html/
```

Change ownership

**on Debian**

```
# chown -R www-data.www-data /var/www/html/wordpress
```

**on CentOS**

```
# chown -R apache:apache /var/www/html/wordpress
```

Set permission

```
# chmod -R 755 /var/www/html/wordpress
```

On CentOS, also turn off SELinux to get wordpress wizard run properly

Temporarily turn off

```
# setenforce 0
```

Permanently turn off

Edit `/etc/sysconfig/selinux` and update entry as follows

```
SELINUX=disabled
```

Open `http://localhost/wordpress/` in the browser and finish setup wizard

Revert permission

```
chown -R root.root /var/www/html/wordpress
```
