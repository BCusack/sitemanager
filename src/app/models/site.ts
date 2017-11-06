export class Site {
    $key: String;
    name: String;
    location: Location;
    interval: Number;
    lastcompletedDate: Date = new Date();
    team: Member[];
    comments: Comment[];
    note: Note;

    constructor() {
    }
}
export class Member {
    $key: String;
    name: String;
    title: String;
}
export class Comment {
    $key: String;
    text: String;
    timestamp: String;
    member: Member;
}
export class Note {
    $key: String;
    text: String;
}
export class Location {
    $key: String;
    state: String;
    suburb: String;
    ycoordinates: String;
    xcoordinates: String;
}
