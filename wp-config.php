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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'sakura' );
/** MySQL database username */
define( 'DB_USER', 'sakura' );
/** MySQL database password */
define( 'DB_PASSWORD', 'sakura' );
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
define('AUTH_KEY',         'ceX@Gd]x|_!e0VweoGNg%`rv3gtr[h}5%Nn-0)?zXHGg_+k>:dyx)_#RpuLZU-`m');
define('SECURE_AUTH_KEY',  'aBdtiDnjUSU+ANAzaG-kON3blwnO9%kdiCV+Rr->}0@r5k rAxD;P453[i.pAR$u');
define('LOGGED_IN_KEY',    'KKPhUru<CmvR=R:),|1S(fV!]+|nQMIp:Fo6Ql-wTpd@k@]X=Kb`j4L86L!]u_3U');
define('NONCE_KEY',        'c Ak1:R23?hKO&u`(|m/Tq/v$A5]wEK$Vr?y3uh;?{gr^%^1chMk|v.iY&mN:GD!');
define('AUTH_SALT',        'pSOM|QR66qtrT=7 ;< L}t8)Wc-9L/RNtj8w}J2 _r5U}ZY<~[m-4g{MxW]aN;p}');
define('SECURE_AUTH_SALT', 'Yd`UH5L!9VtK]b+]eKWKCpuq4jH$FGqk_dTH_lx_L_u{Z*<2]N@_-E[2HPrpv^-o');
define('LOGGED_IN_SALT',   '6f.qh7icDVZ$bsA3-<.`cH1hb 2F7mbA;goJu0.b2TIMQj~/R+{oN1] {Z<W(]0<');
define('NONCE_SALT',       '#bj+pULkV`pnn>v&|.Z~TEHw;c0|k.+~5)5ik~n:?2EI/1u+Fh|y`4A@ar(1h6w7');
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define( 'WP_HOME', 'http://localhost/Apotheose/sakura-cafe' );
define( 'WP_SITEURL', rtrim( WP_HOME, '/' ) . '/wp' );
define( 'WP_CONTENT_DIR', __DIR__ . '/content' );
define( 'WP_CONTENT_URL', rtrim( WP_HOME, '/' ) . '/content' );
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );
// Environnement de production
// define( 'ENVIRONMENT', 'production' );
// Environnement de développement
define( 'ENVIRONMENT', 'development' );
// Environement de préproduction
// define( 'ENVIRONMENT', 'staging' );
if ( defined( 'ENVIRONMENT' ) ) {
    if ( ENVIRONMENT === 'development' ) {
        define( 'WP_DEBUG_DISPLAY', true );
        define( 'WP_DEBUG_LOG', false );
        define( 'DISALLOW_FILE_MODS', false );
        define( 'EMPTY_TRASH_DAYS', 0 );
        define( 'WP_POST_REVISIONS', false );
    } else if ( ENVIRONMENT === 'production' ) {
        define( 'WP_DEBUG_DISPLAY', false );
        define( 'WP_DEBUG_LOG', true );
        define( 'DISALLOW_FILE_MODS', true );
        define( 'WP_POST_REVISIONS', 7 );
    } else {
        echo 'Unknown environement.';
        exit;
    }
} else {
    echo 'No environment is specified.';
    exit;
}
define( 'FS_METHOD', 'direct' );
define( 'DISALLOW_FILE_EDIT', true );
define( 'AUTOMATIC_UPDATER_DISABLED', true );
define( 'WP_AUTO_UPDATE_CORE', false );
/* That's all, stop editing! Happy publishing. */
/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}
/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );