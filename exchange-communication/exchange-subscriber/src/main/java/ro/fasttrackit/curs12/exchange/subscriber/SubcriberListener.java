package ro.fasttrackit.curs12.exchange.subscriber;

import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.messaging.handler.annotation.Headers;
import org.springframework.stereotype.Service;
import ro.fasttrackit.curs12.model.StudentEvent;
import ro.fasttrackit.curs12.model.SumJob;

import java.util.Map;

@Slf4j
@Service
public class SubcriberListener {
    @RabbitListener(queues = "#{directQueue.name}")
    public void receiveStudentEvent(StudentEvent event) {
        log.info("Received event " + event);
    }

    @RabbitListener(queues = "#{sumQueue.name}")
    void receiveSumJobs(SumJob job) {
        log.info(job.getDescription() + " = " + (job.getA() + job.getB()));
    }

    @RabbitListener(queues = "#{fanoutQueue.name}")
    void fanoutListener(StudentEvent event) {
        log.info("Received fanout event " + event);
    }

    @RabbitListener(queues = "#{topicQueue.name}")
    void topicListener(StudentEvent event, @Headers Map<String, Object> headers) {
        log.info("Received on topic " + event);
        log.info("" + headers);
    }
}
