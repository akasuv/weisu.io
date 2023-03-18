export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          category: string | null
          created_at: string | null
          id: number
          link: string | null
          title: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          title?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: number
          link?: string | null
          title?: string | null
        }
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
