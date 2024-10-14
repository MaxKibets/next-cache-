import { redirect, } from 'next/navigation';
import {revalidateTag} from 'next/cache';
import { addMessage } from '@/lib/messages';

export default function NewMessagePage() {
  async function createMessage(formData) {
    'use server';

    const message = formData.get('message');
    addMessage(message);

    // revalidatePath('/messages'); // Revalidate the messages page
    // revalidatePath('/messages', 'layout'); // Revalidate the message page and nested pages
    // revalidatePath('/', 'layout'); // Revalidate the entire site

    // Revalidate all pages with the same tag. 
    // The same as {next: {tags: ['msg']}} for the fetch function 
    // or {tags: ['msg']} for the next cache (see: messages.js) function;
    revalidateTag('msg'); 

    redirect('/messages');
  }

  return (
    <>
      <h2>New Message</h2>
      <form action={createMessage}>
        <p className="form-control">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required rows="5" />
        </p>

        <p className="form-actions">
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
