<?php
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
    'methods'  => 'POST',
    'callback' => 'wc_rest_user_endpoint_handler',
  ));

};
function wc_rest_user_endpoint_handler($request = null) {
  $response = array();
  $parameters = $request->get_json_params();
  $username = sanitize_text_field($parameters['username']);
  $email = sanitize_text_field($parameters['email']);
  $password = sanitize_text_field($parameters['password']);

  $error = new WP_Error();
  if (empty($username)) {
    $error->add(400, __("Le champ 'username' est obligatoire.", 'wp-rest-user'), array('status' => 400));
    return $error;
  }
  if (empty($email)) {
    $error->add(401, __("Le champ 'email' est obligatoire.", 'wp-rest-user'), array('status' => 400));
    return $error;
  }
  if (empty($password)) {
    $error->add(404, __("Le champ 'password' est obligatoire.", 'wp-rest-user'), array('status' => 400));
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
      $response['message'] = __("Utilisateur '" . $username . "' Enregistrement effectué", "wp-rest-user");
    } else {
      return $user_id;
    }
  } else {
    $error->add(406, __("L\'Email existe déjà.", 'wp-rest-user'), array('status' => 400));
    return $error;
  }
  return new WP_REST_Response($response, 123);
}
