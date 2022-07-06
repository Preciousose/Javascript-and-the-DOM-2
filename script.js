function musicalGroups(musicians){
    if(musicians <= o){
        return "not a group"
    } else if (musicians == 1){
        return "solo"
    } else if (musicians == 2){
        return "duet"
    } else if (musicians == 3){
        return "trio" 
    } else if (musicians == 4){
        return "quartet"
    } else {
        return "this is a large group"
    };
}