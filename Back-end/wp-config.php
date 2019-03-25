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
define('AUTH_KEY',         'oQo2~+{F@onyc!>83t3*Q&^tN*XX`Mz]q+]-yq`kiuZ1rfKez|}{CH#D&M,)Lgy-');
define('SECURE_AUTH_KEY',  '6!X$Si-pv+e=X# ^-Vl/Gm+IMV&948bcN7$0Uv!DeNnU3guHre-?f3>$+j(XtJC-');
define('LOGGED_IN_KEY',    '7sW7wv^p|x<747JZ48<YsH@b?{<C$:+|1R&I./78IbW<T*_Nz|~Gk!];^ay>_2DG');
define('NONCE_KEY',        '?b%{+uIw:nK8KcV|$8XkR|,ob`~q) W]H_koJ0|B0g Dm+KKY~W]Yn1Hh)xZL,o#');
define('AUTH_SALT',        ' g13xLm@8xsa*=tFv m2)JkBn^T1sZAl44>mCn8AM[4Oh|H# Y9qypTDN9a!rGY~');
define('SECURE_AUTH_SALT', '*aLw14[XfNay)JQN>w}R(TOa ny.b0+E6qlS9k]KNpN.8:lJ?&j1UXdR@m6;Fn^<');
define('LOGGED_IN_SALT',   'PlW<amSJvrlt(DRy_&C-UP)f6{Nk$`kBS?!!q.rJVc%D;s2j`uQk[`3f8>4G{)^6');
define('NONCE_SALT',       '?*}=UFOVHivyu@QQE0(L7c&!]9HgyG^81Ze-Wjwnf~*oP.QK{k{.3Oi#B@HM`3PI');
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define( 'WP_HOME', 'http://localhost/Oclock/sakura-cafe/' );
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