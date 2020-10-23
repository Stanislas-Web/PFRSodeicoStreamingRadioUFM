import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';
import 'package:testprojet/constants.dart';

class Body extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    Size size = MediaQuery.of(context).size;

    return Column(
      children: <Widget>[
        Container(
          height: size.height * 0.4,
          // color: Colors.black,

          child: Stack(
            children: [
              Container(
                padding: EdgeInsets.only(
                    left: KDefaultPadding,
                    right: KDefaultPadding,
                    bottom: 36 + KDefaultPadding),
                height: size.height * 0.4 - 27,
                decoration: BoxDecoration(
                    color: KPrimaryColor,
                    image: DecorationImage(
                      image: AssetImage("assets/images/affiche1.jpg"),
                      // image: NetworkImage(
                      //     'https://i.pinimg.com/originals/da/c9/3c/dac93cab9ef81f78448c2361cd510be2.jpg'),
                      // fit: BoxFit.fill,
                    ),
                    borderRadius: BorderRadius.only(
                        bottomLeft: Radius.circular(36),
                        bottomRight: Radius.circular(36))),
                child: Row(
                  children: [
                    // Text(
                    //   "Ufm",
                    //   style: Theme.of(context).textTheme.headline5.copyWith(
                    //       color: Colors.white, fontWeight: FontWeight.bold),
                    // ),
                    // Spacer(),
                    // Image.asset('assets/images/logo1.png')
                  ],
                ),
              ),
              Positioned(
                bottom: 0,
                left: 0,
                right: 0,
                child: Container(
                  alignment: Alignment.center,
                  margin: EdgeInsets.symmetric(horizontal: 95),
                  // padding: EdgeInsets.symmetric(horizontal: 1),
                  height: 54,
                  child: Row(
                    children: [
                      // Text(
                      //   "Ufm",
                      //   style: Theme.of(context).textTheme.headline5.copyWith(
                      //       color: Colors.white, fontWeight: FontWeight.bold),
                      // ),
                      // Spacer(),
                      Image.asset(
                        'assets/images/logo1.png',
                        height: 60,
                        width: 60,
                      ),
                      Text(
                        "Radio Urbain FM",
                        style: Theme.of(context).textTheme.headline6.copyWith(
                              color: Colors.black,
                              fontSize: 14,
                              fontWeight: FontWeight.w500,
                            ),
                      ),

                      IconButton(
                          icon: SvgPicture.asset(
                            'assets/icons/play.svg',
                            height: 100,
                            width: 100,
                          ),
                          onPressed: () {}),
                    ],
                  ),
                  decoration: BoxDecoration(
                      color: Colors.yellow,
                      borderRadius: BorderRadius.circular(50),
                      boxShadow: [
                        BoxShadow(
                            offset: Offset(0, 10),
                            blurRadius: 50,
                            color: Colors.black.withOpacity(0.23)),
                      ]),

                  // child: TextField(
                  //   onChanged: (value) {},
                  //   decoration: InputDecoration(
                  //       hintText: 'Rec herche ...',
                  //       hintStyle:
                  //           TextStyle(color: KPrimaryColor.withOpacity(0.5)),
                  //       enabledBorder: InputBorder.none,
                  //       focusedBorder: InputBorder.none,
                  //       suffixIcon: new Icon(Icons.search)
                  //       // suffixIcon:SvgPicture.asset("assets/icons/search.svg")
                  //       ),
                  // ),
                ),
              ),
            ],
          ),
        ),

        SingleChildScrollView(
          child: Column(
            children: [
              Container(
                padding:
                    EdgeInsets.only(left: KDefaultPadding, top: 10, bottom: 10),
                child: Row(
                  children: [
                    Text(
                      "Plus récents",
                      style: Theme.of(context).textTheme.headline6.copyWith(
                            color: Colors.black,
                            fontSize: 22,
                            fontWeight: FontWeight.bold,
                          ),
                    ),
                  ],
                ),
              ),
              Container(
                padding: EdgeInsets.only(left: KDefaultPadding),
                child: Row(
                  children: [
                    Image.asset(
                      "assets/images/affiche17.jpg",
                      height: 80,
                      width: 80,
                    ),
                    Container(
                      padding: EdgeInsets.all(KDefaultPadding),
                      child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "UMatinal",
                              style: Theme.of(context)
                                  .textTheme
                                  .headline6
                                  .copyWith(
                                    color: Colors.black,
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                            ),
                            Text("Avec Carine MUTAHALI")
                          ]),
                    ),
                  ],
                ),
              ),
              Container(
                padding: EdgeInsets.only(left: KDefaultPadding, top: 10),
                child: Row(
                  children: [
                    Image.asset(
                      "assets/images/affiche17.jpg",
                      height: 80,
                      width: 80,
                    ),
                    Container(
                      padding: EdgeInsets.all(KDefaultPadding),
                      child: Column(
                          mainAxisAlignment: MainAxisAlignment.start,
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              "UMatinal",
                              style: Theme.of(context)
                                  .textTheme
                                  .headline6
                                  .copyWith(
                                    color: Colors.black,
                                    fontSize: 18,
                                    fontWeight: FontWeight.bold,
                                  ),
                            ),
                            Text("Avec Carine MUTAHALI")
                          ]),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        //plus recents

        //Les Emissions

        Container(
          padding: EdgeInsets.only(left: KDefaultPadding, top: 10, bottom: 10),
          child: Row(
            children: [
              Text(
                "Emissions",
                style: Theme.of(context).textTheme.headline6.copyWith(
                      color: Colors.black,
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                    ),
              ),
              // emissionSection,
            ],
          ),
        ),
      ],
    );
  }
}

Widget emissionSection = Container(
  padding: EdgeInsets.only(left: KDefaultPadding, top: 2),
  child: Row(
    children: [
      Container(
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Image.asset(
              "assets/images/affiche17.jpg",
              height: 80,
              width: 80,
            ),
            Text("Musique")
          ],
        ),
      ),
      Container(),
    ],
  ),
);
