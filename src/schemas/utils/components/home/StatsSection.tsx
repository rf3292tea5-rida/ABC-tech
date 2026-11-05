// import { Button } from "@/components/common/Button";
// import { ArrowRight, BookOpen, CheckCircle, Users } from "lucide-react";

// export function StatsSection() {
//   const stats = [
//     {
//       icon: Users,
//       value: "50,000+",
//       label: "Students Enrolled",
//     },
//     {
//       icon: BookOpen,
//       value: "200+",
//       label: "Courses Available",
//     },
//     {
//       icon: CheckCircle,
//       value: "95%",
//       label: "Job Placement Rate",
//     },
//   ];

//   return (
//     <section className="bg-brand-surface py-20">
//       <div className="container mx-auto px-4">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-heading mb-4">
//             Our Impact
//           </h2>
//           <p className="text-xl text-brand-text max-w-2xl mx-auto">
//             Numbers that speak for themselves
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-6 mb-12">
//           {stats.map((stat, index) => (
//             <div
//               key={index}
//               className="bg-brand-background border border-brand-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
//             >
//               <div className="w-16 h-16 bg-brand-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
//                 <stat.icon className="w-8 h-8 text-brand-primary" />
//               </div>
//               <div className="text-4xl font-heading font-bold text-brand-heading mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-brand-text">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         <div className="text-center">
//           <Button variant="primary" size="lg">
//             Join Our Community
//             <ArrowRight className="w-5 h-5" />
//           </Button>
//         </div>
//       </div>
//     </section>
//   );
// }




import { AnimatedCounter } from '@/components/common/AnimatedCounter';
import { BookOpen, CheckCircle, Users } from 'lucide-react';

export function StatsSection() {
  return (
    <section className="bg-brand-primary py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Users className="w-12 h-12 mx-auto mb-4 text-brand-accent" />
            <div className="text-5xl font-heading font-bold mb-2">
              <AnimatedCounter target={50000} suffix="+" />
            </div>
            <div className="text-white/80 text-lg">Students Enrolled</div>
          </div>
          <div className="p-6">
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-brand-accent" />
            <div className="text-5xl font-heading font-bold mb-2">
              <AnimatedCounter target={200} suffix="+" />
            </div>
            <div className="text-white/80 text-lg">Courses Available</div>
          </div>
          <div className="p-6">
            <CheckCircle className="w-12 h-12 mx-auto mb-4 text-brand-accent" />
            <div className="text-5xl font-heading font-bold mb-2">
              <AnimatedCounter target={95} suffix="%" />
            </div>
            <div className="text-white/80 text-lg">Job Placement Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}