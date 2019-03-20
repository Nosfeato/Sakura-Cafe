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
define('AUTH_KEY',         'L!HCOL=%d$&D{-RI[=5jT#]-|}uugghPM%XFh}$g>#+(A{?=-%k+7Q;k>)uO+E3}');
define('SECURE_AUTH_KEY',  '8Q+3U[XV8xG%T5?TW8;xa/[W<U.<2bmPc?FSc4O~%aQ8_];>MT#/`.+cI?i)mD0b');
define('LOGGED_IN_KEY',    '[^e9k<;nRMV1zB9mk9^<:2R-l:ZS@Ww=tYw-a?eZ0U{>Cues[ABO+|AdqG|+jS[;');
define('NONCE_KEY',        'eNpc2)$OE]Yb=VY-sdx<|E%`I6:!37}2-(`~s9/U.QmUQ1ti<Uces|~y(KnyF}R%');
define('AUTH_SALT',        'Dl?h7{Jxt&56/wb0UP!j;I8:sU@:OIq5VxraQ-WSM|4h(B1ROY]=nO wfZ5GKP]+');
define('SECURE_AUTH_SALT', 'c!U4Qv{Va4lY*9MKyP4*!+ -*J|+-5o[k7r?=lb o__+dN_35q7z4pD*JLDr1[A5');
define('LOGGED_IN_SALT',   '(G$-l3zzi=:;K4wD4#hxrQRe/9J+2a5F@>BJ-Z0B&O#^F[kk`B,8zPoQuwUK-?sy');
define('NONCE_SALT',       'TAO:Jf~eOzS|-7cJ`-2h>3XFCST.t{`%({.]Yd s>*K1S:*%gF6.#DbIkQ1gfrQI');
/**#@-*/
/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';
define( 'WP_HOME', 'http://localhost/projet/sakura-cafe' );
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