import { IComment } from "../types/Commets";

export const getUsersName = (commentsList: IComment[]): string[] => {
    if(!commentsList.length) {
        return [];
    }

    const users: string[] = [];

    const getAllUsersName = (comments: IComment[]): any => {
        comments.forEach((commentItem: IComment) => {
            users.push(commentItem.author);

            Boolean(commentItem.comments.length) && users.concat(getAllUsersName(commentItem.comments));
        })
    }

    getAllUsersName(commentsList);

    return users.filter((userName,index) => users.indexOf(userName) === index);
};
