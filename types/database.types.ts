export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profile: {
        Row: {
          balance: number | null
          bio: string | null
          created_at: string
          email: string | null
          id: string
          profile_picture: string | null
          username: string | null
        }
        Insert: {
          balance?: number | null
          bio?: string | null
          created_at?: string
          email?: string | null
          id: string
          profile_picture?: string | null
          username?: string | null
        }
        Update: {
          balance?: number | null
          bio?: string | null
          created_at?: string
          email?: string | null
          id?: string
          profile_picture?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      todo: {
        Row: {
          created_at: string
          id: number
          is_complete: boolean | null
          task: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          is_complete?: boolean | null
          task?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          is_complete?: boolean | null
          task?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
