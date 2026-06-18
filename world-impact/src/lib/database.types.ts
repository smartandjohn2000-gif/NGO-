export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          phone: string | null;
          country: string | null;
          role: "super_admin" | "program_manager" | "content_editor" | "volunteer_coordinator" | "member";
          avatar_url: string | null;
          bio: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          phone?: string | null;
          country?: string | null;
          role?: "super_admin" | "program_manager" | "content_editor" | "volunteer_coordinator" | "member";
          avatar_url?: string | null;
          bio?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          email?: string;
          full_name?: string | null;
          phone?: string | null;
          country?: string | null;
          role?: "super_admin" | "program_manager" | "content_editor" | "volunteer_coordinator" | "member";
          avatar_url?: string | null;
          bio?: string | null;
          updated_at?: string;
        };
      };
      volunteers: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string | null;
          country: string;
          skills: string[];
          interests: string[];
          availability: string;
          motivation: string;
          status: "pending" | "approved" | "rejected";
          created_at: string;
        };
        Insert: {
          full_name: string;
          email: string;
          phone?: string | null;
          country: string;
          skills: string[];
          interests: string[];
          availability: string;
          motivation: string;
          status?: "pending" | "approved" | "rejected";
        };
        Update: {
          status?: "pending" | "approved" | "rejected";
        };
      };
      contact_submissions: {
        Row: {
          id: string;
          name: string;
          email: string;
          phone: string | null;
          subject: string;
          message: string;
          status: "new" | "read" | "replied";
          created_at: string;
        };
        Insert: {
          name: string;
          email: string;
          phone?: string | null;
          subject: string;
          message: string;
          status?: "new" | "read" | "replied";
        };
        Update: {
          status?: "new" | "read" | "replied";
        };
      };
      beneficiaries: {
        Row: {
          id: string;
          full_name: string;
          date_of_birth: string | null;
          gender: string | null;
          country: string;
          program: string;
          status: "active" | "inactive" | "graduated";
          case_notes: string | null;
          assigned_manager: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          full_name: string;
          date_of_birth?: string | null;
          gender?: string | null;
          country: string;
          program: string;
          status?: "active" | "inactive" | "graduated";
          case_notes?: string | null;
          assigned_manager?: string | null;
        };
        Update: {
          full_name?: string;
          date_of_birth?: string | null;
          gender?: string | null;
          country?: string;
          program?: string;
          status?: "active" | "inactive" | "graduated";
          case_notes?: string | null;
          assigned_manager?: string | null;
          updated_at?: string;
        };
      };
      blog_posts: {
        Row: {
          id: string;
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          cover_image: string | null;
          category: string;
          tags: string[];
          author_id: string;
          published: boolean;
          featured: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          title: string;
          slug: string;
          excerpt: string;
          content: string;
          cover_image?: string | null;
          category: string;
          tags?: string[];
          author_id: string;
          published?: boolean;
          featured?: boolean;
        };
        Update: {
          title?: string;
          slug?: string;
          excerpt?: string;
          content?: string;
          cover_image?: string | null;
          category?: string;
          tags?: string[];
          published?: boolean;
          featured?: boolean;
          updated_at?: string;
        };
      };
      events: {
        Row: {
          id: string;
          title: string;
          description: string;
          location: string;
          start_date: string;
          end_date: string;
          image: string | null;
          registration_link: string | null;
          capacity: number | null;
          registrations: number;
          status: "upcoming" | "ongoing" | "past" | "cancelled";
          created_at: string;
        };
        Insert: {
          title: string;
          description: string;
          location: string;
          start_date: string;
          end_date: string;
          image?: string | null;
          registration_link?: string | null;
          capacity?: number | null;
          registrations?: number;
          status?: "upcoming" | "ongoing" | "past" | "cancelled";
        };
        Update: {
          title?: string;
          description?: string;
          location?: string;
          start_date?: string;
          end_date?: string;
          image?: string | null;
          registrations?: number;
          status?: "upcoming" | "ongoing" | "past" | "cancelled";
        };
      };
      event_registrations: {
        Row: {
          id: string;
          event_id: string;
          name: string;
          email: string;
          phone: string | null;
          created_at: string;
        };
        Insert: {
          event_id: string;
          name: string;
          email: string;
          phone?: string | null;
        };
        Update: Record<string, never>;
      };
      gallery_items: {
        Row: {
          id: string;
          title: string;
          description: string | null;
          url: string;
          type: "photo" | "video";
          category: string;
          created_at: string;
        };
        Insert: {
          title: string;
          description?: string | null;
          url: string;
          type: "photo" | "video";
          category: string;
        };
        Update: {
          title?: string;
          description?: string | null;
          category?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}
