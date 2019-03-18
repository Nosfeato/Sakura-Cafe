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
define('AUTH_KEY',         'O:E=F+&a3bR&T`-,FMsgsAn&FY]Ij(@r(%!HV4#1~>%Bja-}Z);B4|O0GQ<BP+!F');
define('SECURE_AUTH_KEY',  '--vnWV:ws|Y#I38&[</d+}@;}:&Zz8B;&g GB!id1~Y!E|C_3~fN k!BU-2Aedp9');
define('LOGGED_IN_KEY',    '+uv2(-@R9)91|@|rGNw?@(K_E:nCJ0LPlhNw.0|4`TeAv8OT#+ev_Id P%=i`|pu');
define('NONCE_KEY',        'T#JbmrJLGpk;2B^b 37[y38+D 7/D*OOdqc|e&*L=ar$k%?Jw9Hf!c1@$5H}-e-&');
define('AUTH_SALT',        '+3o[ !p@e;om;hEnl>a+LssPbh^qPDPT+CJ YraeP-b`<pO-yO#2SYJc-~z|ue0/');
define('SECURE_AUTH_SALT', 'SB&;Vm5!Jbc(4-N#*QL;lhw,pyG~}q~h)vc[LWE&dL4,#X1W? 6#7zo+F?aQ8wG7');
define('LOGGED_IN_SALT',   'Q/o}LqcbcGad&NS0wHr5dr]]nuS6[v/zb?5n(-&0yRj/uPQ=^-6b,G}0(zgFL]U7');
define('NONCE_SALT',       '64a|u*Tu7cb}a;yi_9N3Q`yQMB<W92S%5ybcLR#1UyJ=xZ_}pTF/{Za|{XAO tL`');
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define( 'WP_HOME', 'http://localhost/spe_wordpress/sakura-cafe/' );
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
//define( 'ENVIRONMENT', 'production' );
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