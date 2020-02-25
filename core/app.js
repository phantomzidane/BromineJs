import { RenderApp, Container, Condition, Gesture, Colors, Alert, Badge, ButtonGroup, Carousel, Line, Grid, Collapse, Text, Dropdown, Jumbotron, ListGroup, ListGroupItem, Modal, Attr, Nav, NavItem, Card, PageItem, Pagination, Popover, Progress, Spinner, Toast, Timer, Timeout, Icons } from './widget.js';
import {Button} from './bulma.js'

RenderApp({
    el: '#el',
    body: Body(),
    title: 'Mista Zidane',
    style: [],
    links: [],
    script: [],
    framework: ''
})

function name() {
    let data = [];
    for (let i = 0; i < 8; i++) {
        data.push(Gesture.click( Card({
            image: 'https://picjumbo.com/wp-content/uploads/free-stock-images-1080x720.jpg',
            text: 'How are you',
            title: 'Testing',
        }),()=>{
            console.log('how are you', i)
        }))
    }
    return data;
}

function Body() {
    return Container({
        tagtype:'div',
        children:[
            Button.danger({child:'how', click:()=>{console.log('how are you')}}),
            Button.primary({child:'how'}),
            Button.outlineDark({child:'how'}),
            Icons.home,
            ListGroup({
                itemClick: (index,ele)=>{
console.log(index,' has been clicked')
                },
                children:[
                    ListGroupItem({
                        children:[
                            Text({tagtype:'p', text: 'how are you'})
                        ]
                    }),
                    ListGroupItem({
                        children:[
                            Text({tagtype:'p', text: 'how are you'})
                        ]
                    }),
                    ListGroupItem({
                        children:[
                            Text({tagtype:'p', text: 'how are you'})
                        ]
                    }),
                    ListGroupItem({
                        children:[
                            Text({tagtype:'p', text: 'how are you'})
                        ]
                    }),
                    ListGroupItem({
                        children:[
                            Text({tagtype:'p', text: 'how are you'})
                        ]
                    }),
                ]
            })
        ]
    })
    // return Popover.Top({
    //     text: 'how are you',
    //     title: 'popover',
    //     content:'my content',
    //     click: ()=>{
    //         console.log('how are uuuuu');
    //     }
    // })
}

