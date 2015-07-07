<?php

namespace Doner\Database;

class MySql {
	// Hold an instance of the class
	private static $instance;

	// Disable clone function
	private function __clone() {
	}

	// A private constructor; prevents direct creation of object
	private function __construct() {
	}

	// The singleton method
	public static function getInstance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new \PDO( 'mysql:host=' . DATABASE_HOST . ';dbname=' . DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD );
		}

		self::$instance->setAttribute( \PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION );

		return self::$instance;
	}
}
