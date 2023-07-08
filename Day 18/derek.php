<?php
echo "-------------------------if--------------------------";
echo "<br>";

$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
}
echo "<br>";
echo "-------------------------elseif--------------------------";
echo "<br>";

$t = date("H");

if ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}

echo "<br>";
echo "------------------------else if---------------------------";
echo "<br>";

$t = date("H");

if ($t < "10") {
  echo "Have a good morning!";
} elseif ($t < "20") {
  echo "Have a good day!";
} else {
  echo "Have a good night!";
}
echo "<br>";
echo "------------------------loops---------------------------";
echo "<br>";

echo "------------------------while loop---------------------------";

echo "<br>";
$x = 1;

while($x <= 5) {
  echo "The number is: $x <br>";
  $x++;
}
echo "<br>";
echo "------------------------do loops---------------------------";
echo "<br>";

$x = 1;

do {
  echo "The number is: $x <br>";
  $x++;
} while ($x <= 5);
echo "<br>";
echo "------------------------for loops---------------------------";
echo "<br>";

for ($x = 0; $x <= 10; $x++) {
    echo "The number is: $x <br>";
  }
echo "<br>";
echo "------------------------for each loops---------------------------";
echo "<br>";
$colors = array("red", "green", "blue", "yellow");

foreach ($colors as $value) {
  echo "$value <br>";
}
echo "<br>";
echo "------------------------Break and continues loops---------------------------";
echo "<br>";
for ($x = 0; $x < 10; $x++) {
    if ($x == 4) {
      break;
    }
    echo "The number is: $x <br>";
  }
  echo "<br>";
  echo "------------------------Indexed Array---------------------------";
  echo "<br>";
  $cars = array("Volvo", "BMW", "Toyota");
echo "I like " . $cars[0] . ", " . $cars[1] . " and " . $cars[2] . ".";

  echo "<br>";
  echo "------------------------assositive Array---------------------------";
  echo "<br>";
  $age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");
  echo "Peter is " . $age['Peter'] . " years old.";

  echo "<br>";
  echo "------------------------MultiDi Array---------------------------";
  echo "<br>";
  echo $cars[0][0].": In stock: ".$cars[0][1].", sold: ".$cars[0][2].".<br>";
echo $cars[1][0].": In stock: ".$cars[1][1].", sold: ".$cars[1][2].".<br>";
echo $cars[2][0].": In stock: ".$cars[2][1].", sold: ".$cars[2][2].".<br>";
echo $cars[3][0].": In stock: ".$cars[3][1].", sold: ".$cars[3][2].".<br>";

echo "<br>";
echo "------------------------Strings---------------------------";
echo "<br>";
echo strlen("Hello world!"); 


echo "<br>";
echo str_word_count("Hello world!"); 
echo "<br>";
echo strrev("Hello world!");
echo "<br>";
echo strpos("Hello world!", "world");
echo "<br>";
echo str_replace("world", "Dolly", "Hello world!");
echo "<br>";
?>