<?php
  // Get the form data
  $product = $_POST['product'];
  $quantity = $_POST['quantity'];

  // Send the order to the admin via email
  $to = 'admin@rakhabakery.com';
  $subject = 'New Order from Rakha Bakery Website';
  $message = "Product: $product\nQuantity: $quantity";

  mail($to, $subject, $message);

  // Redirect the user to a thank you page
  header('Location: thank_you.html');
  exit;
?>