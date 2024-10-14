// import { unstable_noStore } from 'next/cache';
import Messages from '@/components/messages';
import { getMessages } from '@/lib/messages';

// Revalidate cache every 5 seconds. The same as {next: {revalidate: 5}} for the fetch function;
// export const revalidate = 5;

// Force dynamic rendering. The same as {cache: 'no-store'} for the fetch function;
// export const dynamic = 'force-dynamic'; 

export default async function MessagesPage() {
   // Disable cache for this page. Next recomended to use this function insed of "export const dynamic = 'force-dynamic';".
  // unstable_noStore();

  // const response = await fetch('http://localhost:8080/messages', {
  //   // // Uncomment this line to disable cache
  //   // cache: 'no-store', 
  //   next: {
  //     // Revalidate cache every 5 seconds
  //     // revalidate: 5,
      
  //     tags: ['msg'],
  //   }
  // });
  // const messages = await response.json();

  const messages = await getMessages();

  if (!messages || messages.length === 0) {
    return <p>No messages found</p>;
  }

  return <Messages messages={messages} />;
}
