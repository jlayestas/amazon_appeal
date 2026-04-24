"use client";

import { useRef, useState } from "react";
import { Paperclip, X } from "lucide-react";
import { clsx } from "clsx";

interface FileUploadProps {
  id: string;
  onChange: (file: File | null) => void;
  accept?: string;
}

export function FileUpload({ id, onChange, accept = ".pdf,.doc,.docx,.png,.jpg,.jpeg" }: FileUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [dragOver, setDragOver] = useState(false);

  function handleFile(f: File | null) {
    setFile(f);
    onChange(f);
  }

  function handleDrop(e: React.DragEvent) {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files[0] ?? null;
    if (f) handleFile(f);
  }

  return (
    <div>
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={clsx(
          "flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-6 py-8 text-center transition-colors",
          dragOver
            ? "border-[#1a2e4a] bg-[#f0f4fa]"
            : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-slate-100/60"
        )}
      >
        <Paperclip size={20} className="mb-2 text-slate-400" />
        {file ? (
          <p className="text-sm font-medium text-[#1a2e4a]">{file.name}</p>
        ) : (
          <>
            <p className="text-sm text-slate-500">
              <span className="font-medium text-[#1a2e4a]">Click to attach</span> or drag and drop
            </p>
            <p className="mt-1 text-xs text-slate-400">
              PDF, Word, or image — max 10 MB
            </p>
          </>
        )}
        <input
          ref={inputRef}
          id={id}
          type="file"
          accept={accept}
          className="sr-only"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        />
      </div>

      {file && (
        <button
          type="button"
          onClick={(e) => { e.stopPropagation(); handleFile(null); if (inputRef.current) inputRef.current.value = ""; }}
          className="mt-2 flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-500 transition-colors"
        >
          <X size={13} /> Remove file
        </button>
      )}
    </div>
  );
}
