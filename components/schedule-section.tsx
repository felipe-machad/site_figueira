import { Clock } from "lucide-react"

const schedule = [
  { day: "Segunda-feira", hours: "07:00 - 20:00" },
  { day: "Terça-feira", hours: "07:00 - 20:00" },
  { day: "Quarta-feira", hours: "07:00 - 20:00" },
  { day: "Quinta-feira", hours: "07:00 - 20:00" },
  { day: "Sexta-feira", hours: "07:00 - 20:00" },
  { day: "Sábado", hours: "07:00 - 18:00" },
  { day: "Domingo", hours: "08:00 - 12:00" },
]

export function ScheduleSection() {
  const today = new Date().getDay()
  // Convert to Brazilian format (Monday = 0, Sunday = 6)
  const todayIndex = today === 0 ? 6 : today - 1

  return (
    <section id="horarios" className="py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Quando nos visitar
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 mb-4">
            Horários de Funcionamento
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Estamos abertos todos os dias da semana para melhor atender você e sua família.
          </p>
        </div>

        {/* Schedule Card */}
        <div className="bg-card rounded-2xl border border-border p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-8 pb-6 border-b border-border">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Clock className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-medium text-foreground">Nossos Horários</h3>
              <p className="text-muted-foreground text-sm">Planeje sua visita</p>
            </div>
          </div>

          <div className="space-y-4">
            {schedule.map((item, index) => (
              <div
                key={item.day}
                className={`flex items-center justify-between py-3 px-4 rounded-lg transition-colors ${
                  index === todayIndex
                    ? "bg-primary/10 border border-primary/30"
                    : "hover:bg-secondary/50"
                }`}
              >
                <div className="flex items-center gap-3">
                  {index === todayIndex && (
                    <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  )}
                  <span
                    className={`font-medium ${
                      index === todayIndex ? "text-primary" : "text-foreground"
                    }`}
                  >
                    {item.day}
                  </span>
                  {index === todayIndex && (
                    <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                      Hoje
                    </span>
                  )}
                </div>
                <span
                  className={`font-mono text-sm ${
                    index === todayIndex ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.hours}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
