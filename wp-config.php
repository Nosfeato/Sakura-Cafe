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
define( 'DB_PASSWORD', 'zepjOTKPN2kMmDXy' );
/** MySQL hostname */
define( 'DB_HOST', '92.243.8.107' );
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
define('AUTH_KEY',         '{{5-Ti/tOC$7;9qLth/OnJ,?WRx|@(K?pzgY}3-OyV-HWK-dLHd9|XDAdV9+&P@$');
define('SECURE_AUTH_KEY',  ' D0I^RStCN;wj$p;PKCA5Yj8saN~w*b$[n?45tgG`=zX[pb`vw,f:%RB-, Id1>|');
define('LOGGED_IN_KEY',    ':&+S+i~{;]u?LR7SF}o.O/j1#wSCoza6D<jT=<{iHKRVKkt{gRKFaJGhecc?RvU}');
define('NONCE_KEY',        'J)IdW)NIo07O~{A<W~*{Hn]u#NM+ 4;sW{uedItRuVCy3Liw2qlM#!r}WkO4DgG9');
define('AUTH_SALT',        'CGn-!pYh5@G%^,/3o5H7h6THc*HcC0T?>(TL:)+A.5o#bb]~nR.6kX<K-.%[,|HS');
define('SECURE_AUTH_SALT', '^g(?dq?KZ-y{Z(ahm=Gm*|becYo,l_U9]Cy2({=L<JH{!)$[ iM%Jg!X`PZ4Yqm,');
define('LOGGED_IN_SALT',   'iC8|Fh<V3$(~LZ$Th|iK.sp5*/dzMyA+}I8G=_i-9v,^RAvRu(7)oG<W0Dt5O4R_');
define('NONCE_SALT',       '9+l< 4Y|,*5i7:Yd4W-$CDO}^7BQALHoi#yB[1kIZHNP#LRP<vnyDqcdK !Yz?f+');
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define( 'WP_HOME', 'http://sakura-cafe.local' );
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
define( 'ENVIRONMENT', 'production' );
// Environnement de développement
// define( 'ENVIRONMENT', 'development' );
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