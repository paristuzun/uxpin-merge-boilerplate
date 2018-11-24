import React from "react";
import * as enzyme from 'enzyme'
import toJson from 'enzyme-to-json'
import MarkChart from "../MarkChart";


test('renders MarkChart with two lines correctly', () => {
 const chart = (<MarkChart
    xLabels={true}
    yLabels={true}
    width={300}
    height={300}
    data={
        [
            [
                {
                    "x": 0,
                    "y": 8
                },
                {
                    "x": 1,
                    "y": 5
                },
                {
                    "x": 2,
                    "y": 4
                },
                {
                    "x": 3,
                    "y": 9
                },
                {
                    "x": 4,
                    "y": 1
                },
                {
                    "x": 5,
                    "y": 7
                },
                {
                    "x": 6,
                    "y": 6
                },
                {
                    "x": 7,
                    "y": 3
                },
                {
                    "x": 8,
                    "y": 2
                },
                {
                    "x": 9,
                    "y": 0
                }
            ],
            [
                {
                    "x": 0,
                    "y": 18
                },
                {
                    "x": 1,
                    "y": 9
                },
                {
                    "x": 2,
                    "y": 2
                },
                {
                    "x": 3,
                    "y": 19
                },
                {
                    "x": 4,
                    "y": 11
                },
                {
                    "x": 5,
                    "y": 17
                },
                {
                    "x": 6,
                    "y": 2
                },
                {
                    "x": 7,
                    "y": 1
                },
                {
                    "x": 8,
                    "y": 9
                },
                {
                    "x": 9,
                    "y": 11
                }
            ]
        ]}
    startData={
        [
            [
                {
                    "x": 0,
                    "y": 0
                },
                {
                    "x": 1,
                    "y": 1
                },
                {
                    "x": 2,
                    "y": 2
                },
                {
                    "x": 3,
                    "y": 3
                },
                {
                    "x": 4,
                    "y": 4
                },
                {
                    "x": 5,
                    "y": 0
                },
                {
                    "x": 6,
                    "y": 1
                },
                {
                    "x": 7,
                    "y": 2
                },
                {
                    "x": 8,
                    "y": 3
                },
                {
                    "x": 9,
                    "y": 4
                }
            ],
            [
                {
                    "x": 0,
                    "y": 0
                },
                {
                    "x": 1,
                    "y": 1
                },
                {
                    "x": 2,
                    "y": 2
                },
                {
                    "x": 3,
                    "y": 3
                },
                {
                    "x": 4,
                    "y": 4
                },
                {
                    "x": 5,
                    "y": 0
                },
                {
                    "x": 6,
                    "y": 1
                },
                {
                    "x": 7,
                    "y": 2
                },
                {
                    "x": 8,
                    "y": 3
                },
                {
                    "x": 9,
                    "y": 4
                }
            ]
        ]
    }
    colorRange={["red", "teal"]}
    strokeWidth={3}
    curve="curveLinear"
    crossHair={true}
    />);

    expect(toJson(enzyme.mount(chart))).toMatchSnapshot(`enzyme.mount`);
});

test('renders MarkChart with one line correctly', () => {
    const chart = (<MarkChart
       xLabels={true}
       yLabels={true}
       width={300}
       height={300}
       data={
               [
                   {
                       "x": 0,
                       "y": 8
                   },
                   {
                       "x": 1,
                       "y": 5
                   },
                   {
                       "x": 2,
                       "y": 4
                   },
                   {
                       "x": 3,
                       "y": 9
                   },
                   {
                       "x": 4,
                       "y": 1
                   },
                   {
                       "x": 5,
                       "y": 7
                   },
                   {
                       "x": 6,
                       "y": 6
                   },
                   {
                       "x": 7,
                       "y": 3
                   },
                   {
                       "x": 8,
                       "y": 2
                   },
                   {
                       "x": 9,
                       "y": 0
                   }
               ]}
       startData={
               [
                   {
                       "x": 0,
                       "y": 0
                   },
                   {
                       "x": 1,
                       "y": 1
                   },
                   {
                       "x": 2,
                       "y": 2
                   },
                   {
                       "x": 3,
                       "y": 3
                   },
                   {
                       "x": 4,
                       "y": 4
                   },
                   {
                       "x": 5,
                       "y": 0
                   },
                   {
                       "x": 6,
                       "y": 1
                   },
                   {
                       "x": 7,
                       "y": 2
                   },
                   {
                       "x": 8,
                       "y": 3
                   },
                   {
                       "x": 9,
                       "y": 4
                   }
               ]
       }
       colorRange={["red", "teal"]}
       strokeWidth={3}
       curve="curveLinear"
       crossHair={true}
       />);
   
       expect(toJson(enzyme.mount(chart))).toMatchSnapshot(`enzyme.mount`);
   });

   test('renders MarkChart with incorrect startData set', () => {
    const chart = (<MarkChart
       xLabels={true}
       yLabels={true}
       width={300}
       height={300}
       data={
               [
                   {
                       "x": 0,
                       "y": 8
                   },
                   {
                       "x": 1,
                       "y": 5
                   },
                   {
                       "x": 2,
                       "y": 4
                   },
                   {
                       "x": 3,
                       "y": 9
                   },
                   {
                       "x": 4,
                       "y": 1
                   },
                   {
                       "x": 5,
                       "y": 7
                   },
                   {
                       "x": 6,
                       "y": 6
                   },
                   {
                       "x": 7,
                       "y": 3
                   },
                   {
                       "x": 8,
                       "y": 2
                   },
                   {
                       "x": 9,
                       "y": 0
                   }
               ]}
       startData={
           [
               [
                   {
                       "x": 0,
                       "y": 0
                   },
                   {
                       "x": 1,
                       "y": 1
                   },
                   {
                       "x": 2,
                       "y": 2
                   },
                   {
                       "x": 3,
                       "y": 3
                   },
                   {
                       "x": 4,
                       "y": 4
                   },
                   {
                       "x": 5,
                       "y": 0
                   },
                   {
                       "x": 6,
                       "y": 1
                   },
                   {
                       "x": 7,
                       "y": 2
                   },
                   {
                       "x": 8,
                       "y": 3
                   },
                   {
                       "x": 9,
                       "y": 4
                   }
               ],
               [
                   {
                       "x": 0,
                       "y": 0
                   },
                   {
                       "x": 1,
                       "y": 1
                   },
                   {
                       "x": 2,
                       "y": 2
                   },
                   {
                       "x": 3,
                       "y": 3
                   },
                   {
                       "x": 4,
                       "y": 4
                   },
                   {
                       "x": 5,
                       "y": 0
                   },
                   {
                       "x": 6,
                       "y": 1
                   },
                   {
                       "x": 7,
                       "y": 2
                   },
                   {
                       "x": 8,
                       "y": 3
                   },
                   {
                       "x": 9,
                       "y": 4
                   }
               ]
           ]
       }
       colorRange={["red", "teal"]}
       strokeWidth={3}
       curve="curveLinear"
       crossHair={true}
       />);
   
       expect(toJson(enzyme.mount(chart))).toMatchSnapshot(`enzyme.mount`);
   });

   test('renders MarkChart without vertical and horizontal gridlines', () => {
    const chart = (<MarkChart
       xLabels={false}
       yLabels={false}
       horizontalGridLines={false}
       verticalGridLines={false}
       width={300}
       height={300}
       data={
               [
                   {
                       "x": 0,
                       "y": 8
                   },
                   {
                       "x": 1,
                       "y": 5
                   },
                   {
                       "x": 2,
                       "y": 4
                   },
                   {
                       "x": 3,
                       "y": 9
                   },
                   {
                       "x": 4,
                       "y": 1
                   },
                   {
                       "x": 5,
                       "y": 7
                   },
                   {
                       "x": 6,
                       "y": 6
                   },
                   {
                       "x": 7,
                       "y": 3
                   },
                   {
                       "x": 8,
                       "y": 2
                   },
                   {
                       "x": 9,
                       "y": 0
                   }
               ]}
       startData={
               [
                   {
                       "x": 0,
                       "y": 0
                   },
                   {
                       "x": 1,
                       "y": 1
                   },
                   {
                       "x": 2,
                       "y": 2
                   },
                   {
                       "x": 3,
                       "y": 3
                   },
                   {
                       "x": 4,
                       "y": 4
                   },
                   {
                       "x": 5,
                       "y": 0
                   },
                   {
                       "x": 6,
                       "y": 1
                   },
                   {
                       "x": 7,
                       "y": 2
                   },
                   {
                       "x": 8,
                       "y": 3
                   },
                   {
                       "x": 9,
                       "y": 4
                   }
               ]
       }
       colorRange={["red", "teal"]}
       strokeWidth={3}
       curve="curveLinear"
       crossHair={true}
       />);
   
       expect(toJson(enzyme.mount(chart))).toMatchSnapshot(`enzyme.mount`);
   });

   test('renders MarkChart with a hint', () => {
    const chart = (<MarkChart
       xLabels={false}
       yLabels={false}
       horizontalGridLines={false}
       verticalGridLines={false}
       width={300}
       height={300}
       hint={true}
       data={
               [
                   {
                       "x": 0,
                       "y": 8
                   },
                   {
                       "x": 1,
                       "y": 5
                   },
                   {
                       "x": 2,
                       "y": 4
                   },
                   {
                       "x": 3,
                       "y": 9
                   },
                   {
                       "x": 4,
                       "y": 1
                   },
                   {
                       "x": 5,
                       "y": 7
                   },
                   {
                       "x": 6,
                       "y": 6
                   },
                   {
                       "x": 7,
                       "y": 3
                   },
                   {
                       "x": 8,
                       "y": 2
                   },
                   {
                       "x": 9,
                       "y": 0
                   }
               ]}
       startData={
               [
                   {
                       "x": 0,
                       "y": 0
                   },
                   {
                       "x": 1,
                       "y": 1
                   },
                   {
                       "x": 2,
                       "y": 2
                   },
                   {
                       "x": 3,
                       "y": 3
                   },
                   {
                       "x": 4,
                       "y": 4
                   },
                   {
                       "x": 5,
                       "y": 0
                   },
                   {
                       "x": 6,
                       "y": 1
                   },
                   {
                       "x": 7,
                       "y": 2
                   },
                   {
                       "x": 8,
                       "y": 3
                   },
                   {
                       "x": 9,
                       "y": 4
                   }
               ]
       }
       colorRange={["red", "teal"]}
       strokeWidth={3}
       curve="curveLinear"
       crossHair={true}
       />);
   
       expect(toJson(enzyme.mount(chart))).toMatchSnapshot(`enzyme.mount`);
   });