import { RenderApp,Btn, Container, Condition, Gesture, Colors, Alert, Carousel, Line, Grid, Collapse, Text, Dropdown, Jumbotron, ListGroup, ListGroupItem, Modal, Attr, Nav, NavItem, Card, PageItem, Pagination, Popover, Progress, Spinner, Toast, Timer, Timeout, Icons } from './widget.js';
// the bulma button widget
export {Button, ButtonGroup, Tag}
class Button {
    static normalButton = (classname, child, id, click, hover) => {
        let classes = [];
        if (classname[1] != undefined) {
            classes = classname;
            classes.push('button');
        }
        else {
            classname.pop();
            classes = classname;
            classes.push('button');
        }
        return Btn({
            className: classes,
            child: child,
            id: id,
            click: click,
            hover: hover
        })
    }
    // primary Button
    static primary = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-primary'].concat(classname), child, id, click, hover)
    }
    // secondary Button
    static secondary = ({ child, id, click, hover, classname }) => {
        return this.normalButton(classname, child, id, click, hover)
    }
    // success Button
    static success = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-success'].concat(classname), child, id, click, hover)
    }
    // danger Button
    static danger = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-danger'].concat(classname), child, id, click, hover)
    }
    // warning Button
    static warning = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-warning'].concat(classname), child, id, click, hover)
    }
    // info Button
    static info = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-info'].concat(classname), child, id, click, hover)
    }
    // light Button
    static light = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-light'].concat(classname), child, id, click, hover)
    }
    // dark Button
    static dark = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-dark'].concat(classname), child, id, click, hover);
    }

    // the btn outline section
    // primary outline Button
    static outlinepPrimary = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-primary','is-outlined'].concat(classname), child, id, click, hover)
    }
    // secondary outline Button
    static outlineSecondary = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-outlined'].concat(classname), child, id, click, hover)
    }
    // success outline Button
    static outlineSuccess = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-success','is-outlined'].concat(classname), child, id, click, hover)
    }
    // danger outline Button
    static outlineDanger = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-danger','is-outlined'].concat(classname), child, id, click, hover)
    }
    // warning outline Button
    static outlineWarning = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-warning','is-outlined'].concat(classname), child, id, click, hover)
    }
    // info outline Button
    static outlineInfo = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-info','is-outlined'].concat(classname), child, id, click, hover)
    }
    // light outline Button
    static outlineLight = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-light','is-outlined'].concat(classname), child, id, click, hover)
    }
    // dark outline Button
    static outlineDark = ({ child, id, click, hover, classname }) => {
        return this.normalButton(['is-dark','is-outlined'].concat(classname), child, id, click, hover);
    }
}

// the Bulma ButtonGroup Widget
//#####
//   #####
// ########

function ButtonGroup({ buttons, className, id, role }) {
    let classes = [];
    if (className != undefined) {
        classes = ['buttons'].concat(className);
    }
    else {
        classes = ['buttons']
    }
    // making sure and error should not be throwns
    let btns = [];
    if (buttons != undefined) {
        btns = buttons
    }
    else {
        btns = []
    }
    let element = Container({
        tagtype: 'div',
        children: btns,
        className: classes,
        id: id,
    });
    // setting the role of the button
    if (role != undefined) {
        element.setAttribute('role', role);
    }
    return element;
}

// the boostrap tag Widget
//#############
// ####
//  ##
//   #########

class Tag {
    static normalBadge = (classname, child, id) => {
        let classes = [];
        if (classname[1] != undefined) {
            classes = classname;
            classes.push('tag');
        }
        else {
            classname.pop();
            classes = classname;
            classes.push('tag');
        }
        return Container({
            className: classes,
            tagtype: 'span',
            children: [child],
            id: id
        })
    }
    // primary tag
    static primary = ({ child, id, className }) => {
        return this.normalBadge(['is-primary'].concat(className), child, id)
    }
    // secondary tag
    static secondary = ({ child, id, className }) => {
        return this.normalBadge(['is-secondary'].concat(className), child, id)
    }
    // success tag
    static success = ({ child, id, className }) => {
        return this.normalBadge(['is-success'].concat(className), child, id)
    }
    // danger tag
    static danger = ({ child, id, className }) => {
        return this.normalBadge(['is-danger'].concat(className), child, id)
    }
    // warning tag
    static warning = ({ child, id, className }) => {
        return this.normalBadge(['is-warning'].concat(className), child, id)
    }
    // info tag
    static info = ({ child, id, className }) => {
        return this.normalBadge(['is-info'].concat(className), child, id)
    }
    // light tag
    static light = ({ child, id, className }) => {
        return this.normalBadge(['is-light'].concat(className), child, id)
    }
    // dark tag
    static dark = ({ child, id, className }) => {
        return this.normalBadge(['is-dark'].concat(className), child, id);
    }
}