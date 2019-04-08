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
define( 'DB_PASSWORD', 'zepjOTKPN2kMmDXy' );//zepjOTKPN2kMmDXy
/** MySQL hostname */
define( 'DB_HOST', '92.243.8.107' );//92.243.8.107
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
define('AUTH_KEY',         'K9?bBrO(FccD|d[HSv ^t4R6v[tsdc-@gTCx`r%:DfC5Bu$^P*uMp6AB85d26P9M');
define('SECURE_AUTH_KEY',  '+K:rBE{cE@QvQgIEOcWoI`_yzBd(fR9zCYMRIp:sk4sVf5{0yb||Qe88f9+e=3p=');
define('LOGGED_IN_KEY',    'AS+U:tl{9cP-yl.wiUa9Z|w&2A>g?;+1:kAFw%R7KvL;cbK9`U.PxXYJ*`VQh}Ea');
define('NONCE_KEY',        '+o?-}KKRKSV$1g-0-hyz3lLK!,MVf+tus=*IG+s9SLJf-Fc<Vn}?zGk.WOa0P_1l');
define('AUTH_SALT',        'fODrHWG=gVwosz-RbL#A-z!=s BN9;)-Ox ZL5oKkykx`ZOkXoo[PY75Q6a/ w*p');
define('SECURE_AUTH_SALT', 'd+Pe)JT?`zH.K&(tl*lWj^Bg|/;47,NEbc5P@0I3l_Pcl}$A=u,4+(:gXN9ciQvt');
define('LOGGED_IN_SALT',   'dNZ^OPnrNdD67wU4~+l%xa5;66bGNt%f?YEE3_cAveG!?DLf~rb=Vz(v8jugYaz!');
define('NONCE_SALT',       '^6|P+,E|LNoz>+D${v5,YL+XU|. 62jK9E,/l:d+5_uO(/F|Pv]L_ya}kXQF-iQq');
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