/*
 Navicat Premium Data Transfer

 Source Server         : localhostMYSQL
 Source Server Type    : MySQL
 Source Server Version : 100417
 Source Host           : localhost:3306
 Source Schema         : company

 Target Server Type    : MySQL
 Target Server Version : 100417
 File Encoding         : 65001

 Date: 19/04/2021 10:20:44
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for employees
-- ----------------------------
DROP TABLE IF EXISTS `employees`;
CREATE TABLE `employees`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `salary` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of employees
-- ----------------------------
INSERT INTO `employees` VALUES (1, 'uno', 1);
INSERT INTO `employees` VALUES (2, 'dos', 2);
INSERT INTO `employees` VALUES (3, 'tres', 3);
INSERT INTO `employees` VALUES (4, 'cuatro', 4);
INSERT INTO `employees` VALUES (5, 'cinco', 5);

-- ----------------------------
-- Procedure structure for employeeAddOrEdit
-- ----------------------------
DROP PROCEDURE IF EXISTS `employeeAddOrEdit`;
delimiter ;;
CREATE PROCEDURE `employeeAddOrEdit`(IN _id INT,
	IN _name VARCHAR(255),
	IN _salary INT)
BEGIN

	IF _id = 0 THEN
		INSERT INTO employees (name, salary)
		VALUES (_name, _salary);
		SET _id = LAST_INSERT_ID();
	ELSE
		UPDATE employees SET name = _name, salary = _salary WHERE id = _id;
	END IF;
	
	SELECT _id AS id;

END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
