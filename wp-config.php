<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_reactwithwordpress' );

/** MySQL database username */
define( 'DB_USER', 'wp_reactwithwordpress' );

/** MySQL database password */
define( 'DB_PASSWORD', 'wp_reactwithwordpress' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'pZ?Q,bp2^- 6`3KlF/Il:/Y ,VPP.Cm§iIp+fI[IJ?§s(lb1qq(clc? wncC@>;A');
define('SECURE_AUTH_KEY',  'q%7_VWR-75OaX}cfm]Wxq%3rjf]KLZP=gL~/o,`-wY6RJ0Nk^_1wiokap$?z[.[ ');
define('LOGGED_IN_KEY',    '[m%@wLyPqt5>kn}1%y/=(qa_=()] o<Tz52BS<Gq:S§yo?Ed_D&KGB%I?uY18y|x');
define('NONCE_KEY',        'tH}wtBFp:~fgSob8X=%e f[+UJTS?{5F2!v$[@h]§fVK]uY?v$(VTuHnLUD!b8;J');
define('AUTH_SALT',        '``g^yKGK[V^x6BU5@Ga?(m)hYJM)VA5O1L+j@;jRYr4!d,xZ&Na8<rqzOOCF}t;u');
define('SECURE_AUTH_SALT', 'Ik)2-STgReGW62(by_?,yZEKf{dUw!v3Iu$f;k$2$|TL,gPzZD>§g^8}1$Tk`4-;');
define('LOGGED_IN_SALT',   '+W@,]9Q:4V7vjd0.- RQ^^@;w{l6`~9zj§|,H1KdPVLXcOy2jS44Mg}v]Cgmv@4H');
define('NONCE_SALT',       'H6X/UM/SATb;;__wK3[KPJR]k>1f|@E?IwbCqFdr0Ce^dEAoX§t/K1PcML]@5;]^');

define('JWT_AUTH_SECRET_KEY', 'rF--Q*?W4enuRHu9O-MWq*pB,J!w@.HVr7e;+(_*!W)ML;ayle$+osyU~<N[/cmU');
define('JWT_AUTH_CORS_ENABLE', true);

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
