package cc.sitec.rongyun.service;
/**
 * @Package cc.sitec.rongyun
 * @author keeley
 * @date 2018/18/10/8/09:49
 * @version V1.0
 */

import cc.sitec.rongyun.service.RongyunService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 *
 * @author keeley
 * @date 18/10/8 09:49 
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class RongyunServiceTest {
	@Autowired
	private RongyunService rongyunService;
	@Test
	public void testGetToken() throws Exception {
		String memberName = "keeley";
		String token1 = rongyunService.getToken("1", memberName);
		System.out.println(token1);
		String token2 = rongyunService.getToken("2", memberName);
		System.out.println(token2);
	}
}
