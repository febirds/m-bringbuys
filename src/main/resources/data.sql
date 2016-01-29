CREATE DATABASE `mbringbuys` /*!40100 DEFAULT CHARACTER SET utf8 */;
CREATE TABLE `admin_user` (
  `id` int(11) NOT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(200) DEFAULT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `mcontent` (
  `id` varchar(64) NOT NULL,
  `user_name` varchar(45) DEFAULT NULL,
  `projectId` int(11) DEFAULT NULL,
  `linkurl` varchar(200) DEFAULT NULL,
  `ctime` datetime DEFAULT NULL,
  `isUse` tinyint(4) DEFAULT '1',
  `auther` varchar(45) DEFAULT NULL,
  `title` varchar(200) DEFAULT NULL,
  `utime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `project` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `proName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `weixin` varchar(100) DEFAULT NULL,
  `ctime` datetime DEFAULT NULL,
  `isUse` tinyint(4) DEFAULT '1',
  `nick_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;


