export interface PublicInvitation {
    id: number;

    slug: string;

    coverImage: string;

    quote: string;

    musicFile: string;

    musicTitle: string;

    couple: {
        groomName: string;
        groomFather: string;
        groomMother: string;
        groomPhoto: string;
        groomInstagram: string;

        brideName: string;
        brideFather: string;
        brideMother: string;
        bridePhoto: string;
        brideInstagram: string;
    } | null;

    event: {
        akadDate: string;
        akadTime: string;
        akadLocation: string;

        resepsiTime: string;
        resepsiLocation: string;

        maps: string;
        mapsEmbed: string;
    } | null;

    galleries: {
        id: number;
        image: string;
    }[];

    loveStories: {
        id: number;
        title: string;
        date: string;
        description: string;
    }[];

    gift: {
        bank: string;
        accountNumber: string;
        accountName: string;
        address: string;
    } | null;
}

export interface PublicRsvpItem {
    id: number;

    guestName: string;

    attendance: boolean;

    message: string | null;

    createdAt: string;
}

export interface PublicRsvpResponse {
    data: PublicRsvpItem[];

    pagination: {
        page: number;
        limit: number;
        total: number;
        totalPage: number;
    };
}

export interface PublicRsvpInput {
    guestName: string;

    attendance: boolean;

    message?: string;
}