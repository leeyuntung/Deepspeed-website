"use client";

import { motion } from "framer-motion";
import { Grid, Filter } from "lucide-react";
import Image from "next/image";

export function GalleryGrid() {
    return (
        <section className="py-24 bg-background-light dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h3 className="text-4xl font-bold tracking-tighter uppercase mb-4 text-deep-black dark:text-white">
                            Gallery of Excellence
                        </h3>
                        <p className="text-deep-black/60 dark:text-slate-400 max-w-md">
                            A visual narrative of our journey from the clean-room lab to the heat
                            of the race track.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="size-12 rounded-full border border-deep-black/10 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-deep-black dark:text-white">
                            <Grid className="w-5 h-5" />
                        </button>
                        <button className="size-12 rounded-full border border-deep-black/10 dark:border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all text-deep-black dark:text-white">
                            <Filter className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* CSS Grid Masonry Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-6">
                    {/* Item 1 - Wide & Tall */}
                    <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBr2tf5adTFj___9TALacFEOnnSq7EfpkJjjLl93lBGECBHQ1cxPOiUobisoV7ENlbvxpA2LUJalqErwqcwJEOZGcg1XfrHvGeLOZnP1Hat66XxJhM4e1FIXiJ8eRtBQ_zi7J9QONmYF9Bde2Y-JCzO9ybKp-q7p20R7XRiZneP3zRBKAJG9VFeZV4teSgE_21iRtSrIft_Wdxo9YOOBH09sDwVwEKp3O3ztqgSoZ-BDa5Jq7qqaB-yzYq5c_4KWF7avQ0BzN2pTr4"
                            alt="Chassis engineering"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                            <span className="text-accent-red text-[10px] font-bold uppercase tracking-widest mb-2">
                                Hardware
                            </span>
                            <h5 className="text-white font-bold text-xl uppercase italic">
                                Precision Chassis Design
                            </h5>
                        </div>
                    </div>

                    {/* Item 2 - Standard */}
                    <div className="group relative overflow-hidden rounded-xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAtjCDkZgLlv8n62JAa7bcZhUx7-s_0yOWNZrk42qiHoc-VDLMfUm0BsUkedkQelqScltB_DYa496csgAksJIalbDe3bm27DPfwyThFi_q35Xnn0Oql_QcCxfmXwvJqAQnQt-l3IldWbi7MkJl4M1EoA7uZcoRBbvOS4n43q9wH9cnZw45l20lda2eh1Aq_LifNw66cwGw_pmmDkHFCS9EG1dsKUexJv3FCA1bMixaRi6-3YHH_L0ZWw-ggyzF1R3ERvg8EWEq-45k"
                            alt="PCB components"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
                    </div>

                    {/* Item 3 - Tall */}
                    <div className="md:row-span-2 group relative overflow-hidden rounded-xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP1eztT69SrioLSlOmbyKPKjEpKqnR8BBZEp91y9LpegH2G8D87uUwrSScLBJWQBfRpnc3_ffee_jsdK3n8LJKdH5IOP_9gRqxPilaqcph6xDMXSNUOEUTKF1ubMIPtiQM1Y4-H5NG2A7cuSqr5GJZd0bomGF0KlZXmQaBKOES8PNNU-bJxMl70lbGmZjYd_y2dQsSULQmUoPX_q6-MvYk_xBf_i7RyXLrzjs1Qb_EteV7psrJBug9yZbq4_NgEJ5nVYONxFKyFTw"
                            alt="Lab environment"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                            <h5 className="text-white font-bold text-xl uppercase italic">
                                The Lab Room
                            </h5>
                        </div>
                    </div>

                    {/* Item 4 - Standard */}
                    <div className="group relative overflow-hidden rounded-xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXpartPS_4UP5QoT1LTnVd69PGdpdxANwTku3RKrNR-OFL5osWb5z5MTO1Zprphs-81i3LC06uFqRNMBxeZgCEp87dsGVJGKwIoLzJDaIAa2M6tta2dC7l0xuabpZCjHmOzE-pzzLYP2E6qOxM3fHxsGGLMACS3gFlXuBNw1CvvDRsHdsAkT-SdvywKeZnlUJQkAx8xhazlUPQWMyRhnREfALYQu8Js91_d_7hi1XCg5EzHZiq50zJPcEByHn3VipMQMKhr9claFY"
                            alt="LiDAR visual"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>

                    {/* Item 5 - Wide */}
                    <div className="md:col-span-2 group relative overflow-hidden rounded-xl">
                        <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGSU86PO1UgScFrLnWYccV41KNeG_UayYzCMkWSevae3L3x4AtxxlTT4BKaQ21H3ZQoaspmqm6uOIjEHwK1BPuecpwIVJKu2-YvXTTrTdVAl6UPANnRd-mcRRb4MtpPl4bI2poloOZXDnQwC5U2m-gkh7zKj3ikg_BdGAQpGKdZ8HeHI3DSrphDFh1jZSJ22uw-bLENTa_f1UN-7KGn01sNY4UjmIsRJmnji8I_XViHuMobX2kwexdPQTH6_Q3Hif_IwStfTmT_2Q"
                            alt="Night racing"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                            <span className="text-accent-red text-[10px] font-bold uppercase tracking-widest mb-2">
                                Competition
                            </span>
                            <h5 className="text-white font-bold text-xl uppercase italic">
                                Midnight Trials
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
