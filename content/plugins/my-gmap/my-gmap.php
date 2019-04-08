<?php 
/* 
Plugin Name: My Gmap  
Description: Créer des cartes Google Maps. 
Version: 1.0 
License: GPLv2 
 
Copyright {2019} {Sakura team}  
*/ 

   
if (!class_exists("My_Gmap")) {  
    class My_Gmap{ 
        function gmap_install(){  
            global $wpdb;  
            $table_site = $wpdb->prefix.'mygmap'; 
            if($wpdb->get_var("SHOW TABLES LIKE '$table_site'")!= 
            $table_site){ 
            $sql="CREATE TABLE `$table_site`( 
            `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY ,  
            `titre` TEXT NOT NULL, 
            `longitude` TEXT NOT NULL,  
            `latitude` TEXT NOT NULL  
            )ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci 
            ;"; 
            require_once(ABSPATH.'wp-admin/includes/upgrade.php'); 
            dbDelta($sql); 
            }
        }  
        function init(){ 
            if (function_exists('add_options_page')){  
            $mapage=add_options_page("My Gmap", 'My Gmap', 'administrator', 'my-gmap.php', 
            array($this,'gmap_admin_page'));
            add_action('load-'.$mapage, array($this,'gmap_admin_header')); 
            } 
        }

        function gmap_admin_page(){  
            $page=$_GET['p']; 
 
            switch($page){ 
             
              case 'map' :  
                  require_once('template-map.php');  
              break; 
             
              default:  
                  require_once('template.php');  
              break;  
             
            }                
            if($_GET['action']=='createmap'){  
                if((trim($_POST['Mg-title'])!='')&&(trim($_POST['Mg-latitude'])!='')&&(trim($_POST['Mg-longitude'])!='')){
                            
                    $insertmap=$this->insertmap($_POST['Mg-title'],$_POST['Mg-
                    latitude'],$_POST['Mg-longitude']);
                        
                    if($insertmap==true) echo '<script> window.location = 
                    "'.get_bloginfo('url').'/wp-admin/options-general.php?page=
                    my-gmap/my-gmap.php&map=ok'.'"; </script>';
                    else echo "Une erreur est survenue";
                    
                }else{ 
                    echo '<p style="color:red;">Veuillez remplir tous les 
                    champs</p>'; 
                }
            }else if($_GET['action']=='updatemap'){ 
                if((trim($_POST['Mg-title'])!='')&&(trim($_POST['Mg-latitude'])!='')&&(trim($_POST['Mg-longitude'])!='')&&(trim($_POST['Mg-id'])!='')){                        
                    $this->updatemap($_POST['Mg-id'],$_POST['Mg-title'],
                    $_POST['Mg-latitude'],$_POST['Mg-longitude']);
                    
                    $updatemap=$this->updatemap($_POST['Mg-id'],$_POST['Mg-title'], 
                    $_POST['Mg-latitude'],$_POST['Mg-longitude']);  
 
                    if($updatemap==true) echo '<script> window.location = 
                    "'.get_bloginfo('url').'/wp-admin/options-general.php?page=my-gmap/
                    my-gmap.php&p=map&id='.$_POST['Mg-id'].'&map=ok'.'"; </script>';  
                    else echo "Une erreur est survenue";
                        
                }else{ 
                echo '<p style="color:red;">Veuillez remplir tous les champs</p>'; 
                }  
            }else if($_GET['action']=='deletemap'){ 
                if(trim($_POST['Mg-id'])!=''){ 
                
                    $deletemap=$this->deletemap($_POST['Mg-id']);
                    
                    if($deletemap==true) echo '<script> window.location = 
                    "'.get_bloginfo('url').'/wp-admin/options-general.php?page=my-gmap/my-gmap.php&map=deleteok'.'"; </script>';  
                    else echo "Une erreur est survenue";
                }  
            }
            if($_GET['map']=='ok'){ echo "La carte a bien été enregistrée"; } 
        }
        
        function insertmap($title,$lat,$long){ 
            global $wpdb;  
            $table_map= $wpdb->prefix.'mygmap';  
            
            $sql=$wpdb->prepare(  
            " 
            INSERT INTO ".$table_map." 
            (titre, latitude, longitude) 
            VALUES (%s,%s,%s ) 
            ",  
            $title, 
            $lat, 
            $long  
            ); 
            $wpdb->query($sql); 
            
            
            if (!$sql) $insertmap = false; 
            else $insertmap = true; 
            
            return $insertmap; 
        }

        function deletemap($id){ 
            global $wpdb;  
            
            $table_map= $wpdb->prefix.'mygmap';

            $sql = $wpdb->prepare("DELETE FROM ".$table_map." WHERE id=%d LIMIT 1",$id);  
            
            $mapdelete = $wpdb->query($sql);  
            
            if (!$sql) $mapdelete = false; 
            else $mapdelete = true; 
            
            return $mapdelete; 
        }

        function getmap($id){  
            global $wpdb;

            $table_map= $wpdb->prefix.'mygmap';  
            
            $sql = $wpdb->prepare("SELECT * FROM ".$table_map." WHERE id=%d LIMIT 1",$id);  
            $map = $wpdb->get_results($sql); 
            
            return $map;  
        }

        function getmaplist(){  
            global $wpdb;

            $table_map= $wpdb->prefix.'mygmap';  
            
            $sql = $wpdb->prepare("SELECT * FROM ".$table_map);  
            $maplist = $wpdb->get_results($sql);  
            
            return $maplist;  
        }

        function updatemap($id,$title,$lat,$long){ 
            global $wpdb;
              
            $table_map= $wpdb->prefix.'mygmap';  
            
            $sql=$wpdb->prepare(  
            " 
            UPDATE ".$table_map." SET 
            titre=%s, 
            latitude=%s, 
            longitude=%s 
            WHERE id=%d  
            ",  
            $title, 
            $lat, 
            $long, 
            $id  
            );  
            
            $wpdb->query($sql); 
            
            if (!$sql) $updatemap = false; 
            else $updatemap = true; 
            
            return $updatemap; 
        }

        function gmap_admin_header(){ 
            wp_register_style('my_gmap_css', plugins_url('css/ 
            admin-gmap.css', __FILE__)); 
            wp_enqueue_style('my_gmap_css'); 
            wp_enqueue_script('my_gmap_js', plugins_url('js/admin-gmap.js', 
            __FILE__), array('jquery'));

            wp_enqueue_script('google_map_js','http://maps.googleapis.com/ 
            maps/api/js?key=YOUR_API_KEY&sensor=true');
        }

        function gmap_front_header(){ 
            wp_enqueue_script('google_map_js','http://maps.googleapis.com/
            maps/api/js?key=YOUR_API_KEY&sensor=true');
        }

        function gmap_shortcode($att){
            $maplist=$this->getmap($att['id']); 
            ?> 
            <div id="map" style="width:400px;height:400px"></div> 
                
            <script type="text/javascript"> 
                var coord=new google.maps.LatLng('<?php echo $maplist[0]->latitude ?>','<?php echo $maplist[0]->longitude ?>'); 
                var options = { 
                    center: coord, 
                    zoom: 10, 
                    mapTypeId: google.maps.MapTypeId.ROADMAP 
                }; 
                var map=new google.maps.Map(document.getElementById("map"),options); 
            </script> 
            <?php 
        } 
    } 
} 
if (class_exists("My_Gmap")){  
    $inst_map = new My_Gmap();  
}  
if (isset($inst_map)){ 
    register_activation_hook(__FILE__, array($inst_map, 
    'gmap_install'));
}
if(function_exists('add_shortcode')){  
    add_shortcode('mygmap',array($inst_map, 'gmap_shortcode')); 
}

add_action('admin_menu', array($inst_map, 'init'));

add_action('wp_enqueue_scripts', array($inst_map, 
'gmap_front_header'));


?>