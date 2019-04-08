<?php

add_filter('acf/settings/remove_wp_meta_box', '__return_false');

require get_theme_file_path( 'inc/customizer.php' );
require get_theme_file_path( 'inc/helper.php' );
require get_theme_file_path( 'inc/setup.php' );

add_role(
    'Utilisateur senior',
    __( 'Utilisateur senior' ),
    array(
        'read'         => true,  // true allows this capability
        'edit_posts'   => true,
    )
);

add_role(
    'Utilisateur junior',
    __( 'Utilisateur junior' ),
    array(
        'read'         => true,  // true allows this capability
        'edit_posts'   => false,
    )
);

add_action('rest_api_init', 'wp_rest_user_endpoints');
/**
 * Register a new user
 *
 * @param  WP_REST_Request $request Full details about the request.
 * @return array $args.
 **/
function wp_rest_user_endpoints($request) {
  /**
   * Handle Register User request.
   */
  register_rest_route('wp/v2', 'users/register', array(
    'methods' => 'POST',
    'callback' => 'wc_rest_user_endpoint_handler',
  ));
}
function wc_rest_user_endpoint_handler($request = null) {
  $response = array();
  $parameters = $request->get_json_params();
  $username = sanitize_text_field($parameters['username']);
  $email = sanitize_text_field($parameters['email']);
  $password = sanitize_text_field($parameters['password']);

  $error = new WP_Error();
  if (empty($username)) {
    $error->add(400, __("You must specify a username.", 'wp-rest-user'), array('status' => 400));
    return $error;
  }
  if (empty($email)) {
    $error->add(401, __("You must specify an email adress.", 'wp-rest-user'), array('status' => 400));
    return $error;
  }
  if (empty($password)) {
    $error->add(404, __("You must specify a password.", 'wp-rest-user'), array('status' => 400));
    return $error;
  }
  $user_id = username_exists($username);
    if (!$user_id && email_exists($email) == false) {
      $user_id = wp_create_user($username, $password, $email);
      if (!is_wp_error($user_id)) {
        $user = get_user_by('id', $user_id);
        if (class_exists('WooCommerce')) {
          $user->set_role('Utilisateur junior');
        }
        $response['code'] = 200;
        $response['message'] = __("User login '" . $username . "' successful", "wp-rest-user");
      } else {
        return $user_id;
      }
    } else {
      $error->add(406, __("The specified email already exists.", 'wp-rest-user'), array('status' => 400 ));
      return $error;
    } 
  return new WP_REST_Response($response, 123);
}

add_action('rest_api_init', 'wp_authenticate_endpoints');
/**
 * Register a new user
 *
 * @param  WP_REST_Request $request Full details about the request.
 * @return array $args.
 **/
function wp_authenticate_endpoints($request) {
  /**
   * Handle  login User request.
   */
  register_rest_route('wp/v2', 'users/(?P<id>\d+)', array(
    'methods' => 'POST',
    'callback' => 'wp_authenticate_login',
  ));
}

function wp_authenticate_login( $request = null ) {
  $response = array();
  $parameters = $request->get_json_params();
  $username = sanitize_text_field($parameters['username']);
  $password = sanitize_text_field($parameters['password']);
 
  $error = new WP_Error();
  if (empty($username)) {
    $error->add(400, __("You must specify a username.", 'wp-rest-user'), array('status' => 400));
    return $error;
  }
  if (empty($password)) {
    $error->add(404, __("You must specify a password.", 'wp-rest-user'), array('status' => 400));
    return $error;
  }

  if(is_defined($parameters['username'])) { 
    $user = get_user_by('username', $username);
    if(!is_defined($user)) {
        $error->add(404, __("The specified username does not exist", 'wp-rest-user'), array('status' => 400));
    return $error;
    } else if ( $user['password'] != $parameters['password']) {
        $error->add(404, __("The specified username exists but you have entered the wrong password",         'wp-rest-user'), array('status' => 400));
    }else {
        $userStatus = $user['status'];
        $userNickname =$user['nicename'];
        $userInfo = [$userStatus , $userNickname];
    
        return $userInfo; 
    }
  }
}
/* add_action( 'init', 'setting_my_first_cookie' );

function setting_my_first_cookie() {

 $presentation_inactif = get_theme_mod('sakura_section_presentation_inactif');
  if ($presentation_inactif) {
    $value = true;
  }else{
    $value = false;
  }
  var_dump($presentation_inactif);
  if(!isset($_COOKIE['animation_option'])) {
        setcookie( 'animation_option', $value, time(1)+3600 );
  }
  else if (isset($_COOKIE['animation_option']) && $_COOKIE['animation_option'] != $value) {
    unset($_COOKIE['animation_option']);
  setcookie( 'animation_option', $value, time(1)+3600 );
  }
}  */