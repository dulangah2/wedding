/*
  # Wedding Website Database Schema

  ## Overview
  Creates tables to store RSVP submissions and contact messages for Bhagya & Dulanga's wedding website.

  ## Tables Created
  
  ### 1. rsvp_submissions
  Stores guest RSVP responses with the following information:
  - `id` (uuid, primary key) - Unique identifier for each RSVP
  - `name` (text) - Guest's full name
  - `email` (text) - Guest's email address
  - `number_of_guests` (integer) - Number of guests attending
  - `message` (text, optional) - Personal message from the guest
  - `created_at` (timestamptz) - Timestamp when RSVP was submitted
  
  ### 2. contact_messages
  Stores messages from the contact form:
  - `id` (uuid, primary key) - Unique identifier for each message
  - `name` (text) - Sender's name
  - `email` (text) - Sender's email address
  - `message` (text) - Message content
  - `created_at` (timestamptz) - Timestamp when message was sent

  ## Security
  - Row Level Security (RLS) enabled on both tables
  - Public insert policies allow anyone to submit RSVPs and contact messages
  - No read/update/delete access for public users (admin only via service role)
*/

-- Create RSVP submissions table
CREATE TABLE IF NOT EXISTS rsvp_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  number_of_guests integer NOT NULL DEFAULT 1,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create contact messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE rsvp_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit RSVPs
CREATE POLICY "Anyone can submit RSVP"
  ON rsvp_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow anyone to submit contact messages
CREATE POLICY "Anyone can submit contact message"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);