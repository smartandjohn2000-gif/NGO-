export type UserRole =
  | "super_admin"
  | "program_manager"
  | "content_editor"
  | "volunteer_coordinator"
  | "member";

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          full_name: string | null;
          country: string | null;
          profession: string | null;
          bio: string | null;
          role: UserRole;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          full_name?: string | null;
          country?: string | null;
          profession?: string | null;
          bio?: string | null;
          role?: UserRole;
        };
        Update: {
          full_name?: string | null;
          country?: string | null;
          profession?: string | null;
          bio?: string | null;
          role?: UserRole;
        };
      };
      volunteer_applications: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          country: string;
          skills: string;
          interests: string;
          availability: string;
          motivation: string;
          status: "new" | "reviewing" | "approved" | "archived";
          created_at: string;
        };
        Insert: {
          full_name: string;
          email: string;
          phone: string;
          country: string;
          skills: string;
          interests: string;
          availability: string;
          motivation: string;
          status?: "new" | "reviewing" | "approved" | "archived";
        };
        Update: {
          status?: "new" | "reviewing" | "approved" | "archived";
        };
      };
      contact_messages: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          subject: string;
          message: string;
          created_at: string;
        };
        Insert: {
          full_name: string;
          email: string;
          subject: string;
          message: string;
        };
        Update: {
          subject?: string;
          message?: string;
        };
      };
      event_rsvps: {
        Row: {
          id: string;
          event_id: string;
          full_name: string;
          email: string;
          attendees: number;
          notes: string | null;
          created_at: string;
        };
        Insert: {
          event_id: string;
          full_name: string;
          email: string;
          attendees: number;
          notes?: string | null;
        };
        Update: {
          attendees?: number;
          notes?: string | null;
        };
      };
      beneficiaries: {
        Row: {
          id: string;
          full_name: string;
          age: number | null;
          gender: string | null;
          location: string | null;
          assigned_program_slug: string;
          status: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          full_name: string;
          age?: number | null;
          gender?: string | null;
          location?: string | null;
          assigned_program_slug: string;
          status?: string;
        };
        Update: {
          full_name?: string;
          age?: number | null;
          gender?: string | null;
          location?: string | null;
          assigned_program_slug?: string;
          status?: string;
        };
      };
      beneficiary_case_notes: {
        Row: {
          id: string;
          beneficiary_id: string;
          note: string;
          created_by: string;
          created_at: string;
        };
        Insert: {
          beneficiary_id: string;
          note: string;
          created_by: string;
        };
        Update: {
          note?: string;
        };
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
