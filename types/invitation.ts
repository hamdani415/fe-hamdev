export interface Invitation {

  id: number;

  slug: string;

  coverImage: string | null;

  quote: string | null;

  musicFile: string | null;

  musicTitle: string | null;

  status: "DRAFT" | "PUBLISHED";

  opened: number;

  createdAt: string;

  template: {

    id: number;

    name: string;

    thumbnail: string | null;

  };

  _count: {

    guests: number;

    rsvps: number;

  };

}