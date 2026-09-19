import Link from "next/link";

export function TOC() {
  return (
    <div id="wd-toc">
      <p>Bingqiao Qian</p>
      <ul id="wd-toc">
        <li>
          <a href="https://webdev-client.vercel.app/book" target="_blank">
            Course Book
          </a>
        </li>
        <li>
          <Link href="/labs">Home</Link>
        </li>

        <li>
          <Link href="/labs/lab1">Lab 1</Link>
        </li>

        <li>
          <Link href="/labs/lab2">Lab 2</Link>
        </li>

        <li>
          <Link href="/labs/lab3">Lab 3</Link>
        </li>

        <li>
          <Link href="/labs/lab4">Lab 4</Link>
        </li>

        <li>
          <Link href="/labs/lab5">Lab 5</Link>
        </li>
        <li>
          <Link href="/" id="wd-kambaz-link">
            Kambaz
          </Link>
        </li>
        <li>
          <Link href="/book/ch1" id="wd-toc-book-link">
            Chapter 1
          </Link>
        </li>
      </ul>
    </div>
  );
}