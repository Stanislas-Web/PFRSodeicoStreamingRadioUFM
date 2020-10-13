import 'package:flutter/material.dart';
import 'package:testprojet/constants.dart';
import 'package:testprojet/screens/home/home_screen.dart';

void main() => runApp(MyApp());

/// This is the main application widget.
class MyApp extends StatelessWidget {
  static const String _title = 'UFM';

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: _title,
      theme: ThemeData(
          scaffoldBackgroundColor: KbackgroundColor,
          primaryColor: KPrimaryColor,
          textTheme: Theme.of(context).textTheme.apply(bodyColor: KTextColor),
          visualDensity: VisualDensity.adaptivePlatformDensity),
      home: Homescreen(),
    );
  }
}
