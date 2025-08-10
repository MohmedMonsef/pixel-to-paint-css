import React from "react";
import { cn } from "@/lib/utils";
const InfoCell = ({ label, value }: { label: string; value: string }) => (
  <div className="bg-muted rounded-md p-3 border border-border">
    <div className="text-xs text-muted-foreground mb-1">{label}</div>
    <div className="font-semibold">{value}</div>
  </div>
);

const GreenHeaderCell = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-brand text-brand-foreground text-sm font-semibold px-3 py-2 text-center">
    {children}
  </div>
);

const ValueCell = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={cn("bg-card px-3 py-2 text-center border border-border", className)}>{children}</div>
);

export const GosiCertificate: React.FC = () => {
  return (
    <article dir="rtl" className="max-w-[900px] mx-auto my-8">
      <header className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="text-4xl font-extrabold text-brand leading-none">gosi</div>
          <div className="text-xs text-muted-foreground leading-tight">
            التأمينات الاجتماعية
            <br />
            Social Insurance
          </div>
        </div>
        <div className="text-sm text-right leading-6">
          <div>
            <span className="text-muted-foreground">التاريخ:</span> 14/10/2024
          </div>
          <div>
            <span className="text-muted-foreground">الموافق:</span> 1446/04/11
          </div>
          <div>
            <span className="text-muted-foreground">رمز الشهادة:</span> 76390286
          </div>
        </div>
      </header>

      <h1 className="text-2xl md:text-3xl font-bold text-center my-6">
        شهادة المدد والأجور
      </h1>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <InfoCell label="الاسم" value="فهد علي عبدالله فهيمي" />
        <InfoCell label="رقم الهوية الوطنية / الإقامة" value="1016864892" />
        <InfoCell label="الجنسية" value="السعودية" />
        <InfoCell label="تاريخ الميلاد" value="1971/05/30" />
      </section>

      <section className="mt-5 rounded-md overflow-hidden border border-border">
        <div className="grid grid-cols-4">
          <GreenHeaderCell>نظام التقاعد</GreenHeaderCell>
          <GreenHeaderCell>نظام التأمينات</GreenHeaderCell>
          <GreenHeaderCell>إجمالي أشهر المصروفة</GreenHeaderCell>
          <GreenHeaderCell>إجمالي أشهر الاشتراك</GreenHeaderCell>
        </div>
        <div className="grid grid-cols-4 text-sm">
          <ValueCell>411 شهر</ValueCell>
          <ValueCell>18 شهر</ValueCell>
          <ValueCell>0 شهر</ValueCell>
          <ValueCell>429 شهر</ValueCell>
        </div>
      </section>

      {/* Employer 1 */}
      <section aria-label="المنشأة 1" className="mt-6 rounded-lg border border-border overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-brand-soft">
          <div className="flex items-center gap-2">
            <div className="bg-brand text-brand-foreground rounded-md w-7 h-7 grid place-items-center font-semibold">1</div>
            <div className="font-semibold">الجهة / المنشأة</div>
          </div>
          <div className="text-muted-foreground">مؤسسة تراث النجادرية للمقاولات</div>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-1 text-sm">
          <GreenHeaderCell>رقم المنشأة</GreenHeaderCell>
          <GreenHeaderCell>الأجر الخاضع لاشتراك</GreenHeaderCell>
          <GreenHeaderCell>تاريخ الالتحاق</GreenHeaderCell>
          <GreenHeaderCell>تاريخ بداية الأجر</GreenHeaderCell>
          <GreenHeaderCell>الحالة</GreenHeaderCell>

          <ValueCell>509303371</ValueCell>
          <ValueCell>32074.90</ValueCell>
          <ValueCell>2024/09/01</ValueCell>
          <ValueCell>2024/09/01</ValueCell>
          <ValueCell className="text-brand font-semibold">نشط</ValueCell>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-t border-border">
          <GreenHeaderCell>نظام التأمينات</GreenHeaderCell>
          <GreenHeaderCell>إجمالي الأجر</GreenHeaderCell>
          <GreenHeaderCell>تاريخ الاستبعاد</GreenHeaderCell>

          <ValueCell>النظام</ValueCell>
          <ValueCell>36375.00</ValueCell>
          <ValueCell>—</ValueCell>
        </div>
      </section>

      {/* Employer 2 */}
      <section aria-label="المنشأة 2" className="mt-6 rounded-lg border border-border overflow-hidden">
        <div className="flex items-center justify-between px-4 py-2 bg-brand-soft">
          <div className="flex items-center gap-2">
            <div className="bg-brand text-brand-foreground rounded-md w-7 h-7 grid place-items-center font-semibold">2</div>
            <div className="font-semibold">الجهة / المنشأة</div>
          </div>
          <div className="text-muted-foreground">شركة زاجل المتطورة للخدمات اللوجستية</div>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-1 text-sm">
          <GreenHeaderCell>رقم المنشأة</GreenHeaderCell>
          <GreenHeaderCell>الأجر الخاضع لاشتراك</GreenHeaderCell>
          <GreenHeaderCell>تاريخ الالتحاق</GreenHeaderCell>
          <GreenHeaderCell>تاريخ بداية الأجر</GreenHeaderCell>
          <GreenHeaderCell>الحالة</GreenHeaderCell>

          <ValueCell>633055505</ValueCell>
          <ValueCell>15347.67</ValueCell>
          <ValueCell>2024/07/19</ValueCell>
          <ValueCell>2024/07/19</ValueCell>
          <ValueCell className="text-destructive font-semibold">غير نشط</ValueCell>
        </div>

        <div className="grid md:grid-cols-3 grid-cols-1 text-sm border-t border-border">
          <GreenHeaderCell>نظام التأمينات</GreenHeaderCell>
          <GreenHeaderCell>إجمالي الأجر</GreenHeaderCell>
          <GreenHeaderCell>تاريخ الاستبعاد</GreenHeaderCell>

          <ValueCell>النظام</ValueCell>
          <ValueCell>36375.00</ValueCell>
          <ValueCell>2024/07/20</ValueCell>
        </div>
      </section>

      <footer className="mt-6 flex flex-col md:flex-row items-start gap-4">
        <div className="grow">
          <div className="inline-flex items-center gap-2 text-brand font-semibold">
            <span className="inline-block bg-brand text-brand-foreground rounded px-2 py-0.5 text-xs">عام</span>
            Public
          </div>
          <p className="text-xs text-muted-foreground mt-2 leading-6">
            تحقّق من صحة وصلاحية الشهادة عبر زيارة الرابط أدناه في الموقع الإلكتروني للمؤسسة العامة للتأمينات
            الاجتماعية، أو عن طريق استخدام الرمز المرئي التالي.
          </p>
        </div>
        <div className="w-28 h-28 border-2 border-dashed border-border rounded-md" aria-label="QR placeholder" />
      </footer>
    </article>
  );
};

export default GosiCertificate;
