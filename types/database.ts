export type UserRole =
  | "super_admin"
  | "program_manager"
  | "content_editor"
  | "volunteer_coordinator"
  | "member";

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

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
        Relationships: [];
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
        Relationships: [];
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
        Relationships: [];
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
        Relationships: [];
      };
      newsletter_subscriptions: {
        Row: {
          id: string;
          email: string;
          source: string;
          created_at: string;
        };
        Insert: {
          email: string;
          source?: string;
        };
        Update: {
          source?: string;
        };
        Relationships: [];
      };
      member_registrations: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          created_at: string;
        };
        Insert: {
          full_name: string;
          email: string;
        };
        Update: {
          full_name?: string;
          email?: string;
        };
        Relationships: [];
      };
      form_notification_logs: {
        Row: {
          id: string;
          form_type:
            | "volunteer_application"
            | "contact_message"
            | "event_rsvp"
            | "newsletter_subscription"
            | "member_registration";
          submission_table: string;
          submission_id: string | null;
          payload: Json;
          delivery_status: "sent" | "failed";
          provider_message_id: string | null;
          error_message: string | null;
          created_at: string;
        };
        Insert: {
          form_type:
            | "volunteer_application"
            | "contact_message"
            | "event_rsvp"
            | "newsletter_subscription"
            | "member_registration";
          submission_table: string;
          submission_id?: string | null;
          payload: Json;
          delivery_status: "sent" | "failed";
          provider_message_id?: string | null;
          error_message?: string | null;
        };
        Update: {
          delivery_status?: "sent" | "failed";
          provider_message_id?: string | null;
          error_message?: string | null;
        };
        Relationships: [];
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
        Relationships: [];
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
        Relationships: [
          {
            foreignKeyName: "beneficiary_case_notes_beneficiary_id_fkey";
            columns: ["beneficiary_id"];
            isOneToOne: false;
            referencedRelation: "beneficiaries";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "beneficiary_case_notes_created_by_fkey";
            columns: ["created_by"];
            isOneToOne: false;
            referencedRelation: "profiles";
            referencedColumns: ["id"];
          },
        ];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
};
